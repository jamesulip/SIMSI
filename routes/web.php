<?php

use App\Models\Jobs;
use Inertia\Inertia;
use App\Models\Company;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\ApplicantController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('test', function () {
   return Jobs::with('branchPosted')->get();
});

Route::get('/', function () {
    // cache branches,employers,principals
    $branches =\Cache::remember('branches', 60, function () {
        return \App\Models\Branch::all();
    });
    $employers =\Cache::remember('employers', 60, function () {
        return \App\Models\Employer::with('firstMedia')->select('id','name','is_highlighted')->get();
    });
    $principals =\Cache::remember('principals', 60, function () {
        return \Illuminate\Support\Facades\Storage::disk('public')->files('principals');
    });
    $company = \Cache::remember('company', 60, function () {
        return Company::first();
    });
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'recentJobs' => \App\Models\Jobs::with('employer','media')->available()->latest()->take(6)->get()->map(function ($job) {
            $job['created_at'] = $job->created_at->diffForHumans();
            $job['description'] = strip_tags($job->description);
            return $job;
        }),
        'branches' => $branches,
        'employers'=> $employers,
        'principals'=> $principals,
        'company' => $company,
    ]);

});
Route::get('/jobs', [JobsController::class, 'showPublicPost']);
Route::get('/job/{job:uuid}', [JobsController::class, 'showPublicPostDetails']);
Route::get('/job/{job:uuid}/apply', [JobsController::class, 'applyJob']);
Route::post('/job/{job:id}/apply', [ApplicantController::class, 'store']);
Route::get('/job/{job:id}/apply/success', [JobsController::class, 'applyJobSuccess'])->name('job.apply.success')->middleware('signed');

// about us
Route::get('/about-us', function () {
    return Inertia::render('Guest/AboutUs');
});
Route::get('/mission', function () {
    return Inertia::render('Guest/Mission');
});
Route::get('/contact-us', function () {
    return Inertia::render('Guest/ContactUs',
    [
        'branches' => \App\Models\Branch::all(),
    ]
);
});

Route::get('/job/{job:uuid}', [JobsController::class, 'showPublicPostDetails']);
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        // select(['first_name','last_name','id','applicant_status_id','jobs_id'])->
        $applicants = \App\Models\Applicant::with('applicantStatus')->orderBy('created_at','desc')->get();
        $jobs = \App\Models\Jobs::with('applicant')->orderBy('created_at','desc')->get();
        return Inertia::render('Dashboard', [
            'applicants' => $applicants,
            'jobs' => $jobs->map(function ($job) {
                $job['created_at_human'] = $job->created_at->diffForHumans();
                $job['description'] = strip_tags($job->description);
                return $job;
            }),
        ]);
    });

    // add middleware to resource per function
    // media resource

    Route::group(['prefix' => 'admin'], function () {
        Route::resource('/user-management', \App\Http\Controllers\UserManagementController::class);
        Route::resource('/media', FilesController::class);
        Route::delete('/jobs/{job}/media/{media}', [FilesController::class, 'destroyMedia']);
        Route::resource('/applicant', \App\Http\Controllers\ApplicantController::class);
        Route::get('/jobs/{job}/applicant/{applicant}',[ \App\Http\Controllers\ApplicantController::class, 'show']);
        Route::post('/jobs/{id}/update', [\App\Http\Controllers\JobsController::class, 'update']);
        Route::resource('/jobs', \App\Http\Controllers\JobsController::class);
        Route::resource('/user-management', \App\Http\Controllers\UserManagementController::class)->middleware('permission:view_user');
        Route::resource('employers', EmployerController::class);
        Route::post('/employers/{employer}/update', [\App\Http\Controllers\EmployerController::class, 'update']);
        Route::resource('company', CompanyController::class)->middleware('role:admin');
        Route::resource('branches', \App\Http\Controllers\BranchController::class)->name('index', 'branches.index');
    });
    Route::get('/announcements', function () {
        return Inertia::render('Dashboard');
    });
});
