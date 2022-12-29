<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class JobsController extends Controller
{
    //
    public function __construct()
    {
        // add middleware to index
        $this->middleware('auth:sanctum');
        $this->middleware('role:admin')->only([ 'create', 'edit', 'store', 'update', 'destroy']);

    }
    public function index(Request $req)
    {
        // return inertia view
        $jobs = \App\Models\Jobs::with('applicant')
        ->when($req->search, function($query) use ($req){
            $query->where('title', 'like', '%'.$req->search.'%')
            ->orWhere('description', 'like', '%'.$req->search.'%');
        })
        ->get();
        return inertia('Admin/Jobs/Index', [
            'jobs' => $jobs,
        ]);
    }

    public function create()
    {
        // return inertia view
        return inertia('Admin/Jobs/Create',
        [
            'job_types'=>\App\Models\JobType::all(),
        ]
    );
    }

    public function edit($id)
    {
        return inertia('Admin/Jobs/Edit', [
            'job' => \App\Models\Jobs::find($id),
            'job_types'=>\App\Models\JobType::all(),
        ]);
    }
    public function store(Request $request)
    {
        $request->validate(\App\Models\Jobs::$rules);
        $job =new \App\Models\Jobs();
        $job->fill($request->all());
        $job->save();

        if($request->hasFile('images')){
            foreach($request->images as $image){
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
        return Redirect::route('jobs.show', ['job' => $job]);
    }
    public function destroy($id)
    {
        $job = \App\Models\Jobs::find($id);
        $job->delete();
        return Redirect::route('jobs.index');
    }

    public function show($id)
    {
        // return inertia view
        return inertia('Admin/Jobs/Show', [
            'job' => \App\Models\Jobs::with('applicant')->find($id),
            'applicant_status'=>\App\Models\ApplicantStatus::all(),
        ]);
    }

    public function showPublicPostDetails(Jobs $job)
    {
        // return inertia view
        return inertia('Guest/Show', [
            'job' => $job,
        ]);
    }
    public function showPublicPost(Request $query){

        $jobs = \App\Models\Jobs::when($query->search, function ($q, $search) {
            $q->where('title', 'like', '%'.$search.'%');
        })->
        orderBy('created_at', 'desc')->
        get();
        return inertia('Guest/Jobs', [
            'jobs' => $jobs,
        ]);
    }

    public function applyJob($id){
        $job = \App\Models\Jobs::find($id);
        return inertia('Guest/Apply', [
            'job' => $job,
        ]);
    }
    public function applyJobSuccess($id){
        $job = \App\Models\Jobs::find($id);
        return inertia('Guest/ApplySuccess', [
            'job' => $job,
        ]);
    }
}
