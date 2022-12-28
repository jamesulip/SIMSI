<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\JobsController;
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
            'recentJobs' => \App\Models\Jobs::latest()->take(3)->get(),
        ]);
    });
    Route::get('/jobs',[JobsController::class,'showPublicPost']);
    Route::get('/job/{job:uuid}',[JobsController::class,'showPublicPostDetails']);
    Route::get('/job/{job:uuid}/apply',[JobsController::class,'applyJob']);
    Route::post('/job/{job:id}/apply',[ApplicantController::class,'store']);


    // about us
    Route::get('/about-us', function () {
        return Inertia::render('Guest/AboutUs');
    });
    Route::get('/about-us', function () {
        return Inertia::render('Guest/Mission');
    });

Route::get('/job/{job:uuid}',[JobsController::class,'showPublicPostDetails']);
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    });

    Route::resource('/admin/jobs', \App\Http\Controllers\JobsController::class);
    Route::resource('/admin/user-management', \App\Http\Controllers\UserManagementController::class);

    Route::get('/announcements', function () {
        return Inertia::render('Dashboard');
    });
});
