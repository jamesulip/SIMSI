<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class EmployerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        // create dynamic filter for employers
        $employer = Employer::when($req->search, function ($query, $search) {
            return $query->where('name', 'like', "%$search%")
                ->orWhere('email', 'like', "%$search%")
                ->orWhere('phone', 'like', "%$search%")
                ->orWhere('address', 'like', "%$search%")
                ->orWhere('country', 'like', "%$search%");
        })
        ->with('firstMedia')
        ->when($req->sortBy, function ($query, $sortBy) use ($req) {
            return $query->orderBy($sortBy, $req->descending ? 'desc' : 'asc');
        })

        ->paginate($req->rowsPerPage ?? 10);

        return Inertia::render('Employer/Index', [
            'employers' => $employer,
            'req' => $req->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Employer/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required',
            'country' => 'required',
        ]);

        $employers = Employer::create($request->all());
        if($request->hasFile('logo')){
            $employers->addMediaFromRequest('logo')->toMediaCollection('logo');
        }
        return redirect()->route('employers.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function show(Employer $employer)
    {
        //
        return Inertia::render('Employer/Edit', [
            'employer' => $employer->load('firstMedia','media'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function edit(Employer $employer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employer $employer)
    {
        //
        $request->validate([
            'name' => 'required',
            'logo'=>'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($request->hasFile('logo')){
            $employer->addMediaFromRequest('logo')->toMediaCollection('logo');
        }
        $employer->fill($request->all());
        $employer->update();
        return redirect()->route('employers.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employer $employer)
    {
        //
    }
}
