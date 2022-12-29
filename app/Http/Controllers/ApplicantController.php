<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use Inertia\Inertia;
use App\Models\Applicant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class ApplicantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $applicants = Applicant::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Jobs $job)
    {
        // validate request
       $rules = [
        'first_name' => 'required',
        'last_name' => 'required',
        // require email if phone is not set
        'email' => 'required_without:phone',
        // require phone if email is not set
        'phone' => 'required_without:email',
        'address' => 'required'
       ];
         $request->validate($rules);

        $job->applications()->create($request->all());
        // redirect to sucess page
        $signedUrl = URL::temporarySignedRoute(
            'job.apply.success', now()->addMinutes(30), ['job' => $job]
        );
        return Inertia::location($signedUrl);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function show(Applicant $applicant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function edit(Applicant $applicant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Applicant $applicant)
    {

        $applicant->fill($request->all());
        $applicant->save();


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Applicant  $applicant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Applicant $applicant)
    {
        //
    }
}
