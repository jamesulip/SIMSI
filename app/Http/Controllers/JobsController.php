<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class JobsController extends Controller
{
    //
    public function index()
    {
        // return inertia view
        $jobs = \App\Models\Jobs::all();
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
    public function show($id)
    {
        // return inertia view
        return inertia('Admin/Jobs/Show', [
            'job' => \App\Models\Jobs::find($id),
        ]);
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

        foreach($request->images as $image){
            $job->addMedia($image)->toMediaCollection('images');
        }

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

}
