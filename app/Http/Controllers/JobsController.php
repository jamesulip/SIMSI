<?php

namespace App\Http\Controllers;

use App\Meta;
use App\Models\Jobs;
use App\Models\Applicant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
class JobsController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware(['permission:edit_job'])->only(['edit', 'update']);
        $this->middleware(['permission:delete_job'])->only(['destroy']);
        $this->middleware(['permission:create_job'])->only(['create', 'store']);
    }

    public function index(Request $req)
    {
        // return inertia view
        $jobs = \App\Models\Jobs::with('applicant')
        ->when($req->search, function ($query) use ($req) {
            $query->where('title', 'like', '%'.$req->search.'%')
            ->orWhere('description', 'like', '%'.$req->search.'%');
        })
        ->when($req->employer_id, function ($query) use ($req) {
            $query->where('employer_id', $req->employer_id);
        })
        ->with('branchPosted')
        ->get();

        return inertia('Admin/Jobs/Index', [
            'jobs' => $jobs,
            'employers' => \App\Models\Employer::all(),
        ]);
    }

    public function create()
    {
        // return inertia view
        return inertia('Admin/Jobs/Create',
            [
                'job_types' => \App\Models\JobType::all(),
                'employers' => \App\Models\Employer::all(),
            ]
        );
    }

    public function edit($id)
    {
        return inertia('Admin/Jobs/Edit', [
            'job' => \App\Models\Jobs::find($id),
            'job_types' => \App\Models\JobType::all(),
            'employers' => \App\Models\Employer::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(\App\Models\Jobs::$rules);
        $job = new \App\Models\Jobs();
        $job->fill($request->all());
        $job->save();

        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                $job->addMedia($image)->toMediaCollection('images');
            }
        }

        $job->load('media');

        return Redirect::route('jobs.show', ['job' => $job]);
    }

    public function update(Request $request, $id)
    {
        $request->validate(\App\Models\Jobs::$rules);
        $job = \App\Models\Jobs::find($id);
        $job->update($request->all());
        // upload file
        if ($request->hasFile('images')) {
            foreach ($request->images as $image) {
                $job->addMedia($image)->toMediaCollection('images');
            }
        }
        return Redirect::route('jobs.show', ['job' => $job]);
    }

    public function destroy($id)
    {
        $job = \App\Models\Jobs::find($id);
        $job->delete();

        return Redirect::route('jobs.index');
    }

    public function show($id, Request $req)
    {
        // return inertia view
        $applicants = Applicant::with('resume')->where('jobs_id', $id)
        ->when($req->search, function ($query) use ($req) {
            $query->where('first_name', 'like', '%'.$req->search.'%')
            ->orWhere('last_name', 'like', '%'.$req->search.'%')
            ->orWhere('email', 'like', '%'.$req->search.'%');
        })
        ->when($req->applicant_status_id, function ($query) use ($req) {
            $query->where('applicant_status_id', $req->applicant_status_id);
        })
        ->get();

        return inertia('Admin/Jobs/Show', [
            'job' => \App\Models\Jobs::find($id),
            'applicant_status' => \App\Models\ApplicantStatus::all(),
            'applicants' => $applicants,
        ]);
    }

    public function showPublicPostDetails(Jobs $job)
    {
        // return inertia view
        Meta::addMeta('title', $job->title);
        Meta::addMeta('description', strip_tags($job->description));

        // meta for facebbok
        Meta::addMeta('og:title', $job->title);
        Meta::addMeta('og:type', 'article');
        // php remove html tags

        Meta::addMeta('og:description', strip_tags($job->description));
        Meta::addMeta('og:url', route('jobs.show', ['job' => $job]));
        Meta::addMeta('og:image', $job->getFirstMediaUrl('images'));
        return inertia('Guest/Show', [
            'job' => $job,
        ]);
    }

    public function showPublicPost(Request $query)
    {
        $jobs = \App\Models\Jobs::when($query->search, function ($q, $search) {
            $q->where('title', 'like', '%'.$search.'%');
        })->
        when($query->location, function ($q, $location) {
            $q->where('location', 'like', '%'.$location.'%');
        })->
        available()->
        orderBy('created_at', 'desc')->
        paginate(20);
        return inertia('Guest/Jobs', [
            'jobs' => $jobs,
            'available_locations' => \App\Models\Jobs::whereNotNull('location')->select('location')->available()->distinct()->get(),
            'query'=> $query->all(),
        ]);
    }

    public function applyJob($id)
    {
        $job = \App\Models\Jobs::find($id);

        return inertia('Guest/Apply', [
            'job' => $job,
        ]);
    }

    public function applyJobSuccess($id)
    {
        $job = \App\Models\Jobs::find($id);

        return inertia('Guest/ApplySuccess', [
            'job' => $job,
        ]);
    }
}
