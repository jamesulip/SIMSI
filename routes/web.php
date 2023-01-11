<?php

use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\JobsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return  $user = \App\Models\User::first();
   //    add the role
    $user->assignRole('admin');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'recentJobs' => \App\Models\Jobs::with('employer')->available()->latest()->take(9)->get(),
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
    return Inertia::render('Guest/ContactUs');
});

Route::get('/job/{job:uuid}', [JobsController::class, 'showPublicPostDetails']);
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
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
    });
    Route::get('/announcements', function () {
        return Inertia::render('Dashboard');
    });
});
