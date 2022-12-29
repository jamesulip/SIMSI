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
    public function __construct()
    {
        $this->middleware('permission:update_applicant_status', ['only' => ['update']]);
        $this->middleware('permission:view_applicant', ['only' => ['index']]);
    }
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
       $url =  \DB::transaction(function ()use($request,$job) {
            $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            // require email if phone is not set
            'email' => 'required_without:phone',
            // require phone if email is not set
            'phone' => 'required_without:email',
            'address' => 'required',
            'resume' => 'required|mimes:pdf,doc,docx|max:5000',
           ];
             $request->validate($rules,[
                'email.required_without' => 'The email field is required when phone is not present.',
                'phone.required_without' => 'The phone field is required when email is not present.',
                'resume.mimes' => 'The resume must be a file of type: pdf, doc, docx.',
                'resume.max' => 'The resume may not be greater than 5mb.'
            ]);

            $applicant  = $job->applications()->create($request->all());
            // redirect to sucess page
            if($request->hasFile('resume')){
                $applicant->addMediaFromRequest('resume')->toMediaCollection('resume');
            }
            $signedUrl = URL::temporarySignedRoute(
                'job.apply.success', now()->addMinutes(30), ['job' => $job]
            );

            return $signedUrl;
       });

        return redirect($url);
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
