<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Branch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BranchController extends Controller
{
    //  resource function
    public function index()
    {
       return inertia('Admin/Branch/Index', [
          'branches' => Branch::all(),
       ]);
    }
    public function show(Branch $branch)
    {
      return inertia('Admin/Branch/Show', [
         'branch' => $branch,
      ]);
    }
    public function create()
    {
       return inertia('Admin/Branch/Create');
    }
    public function store(Request $request)
    {
       $branch = Branch::create($request->all());
       return Redirect::route('branches.show', $branch);
    }
    public function update(Request $request, Branch $branch)
    {
       $branch->update($request->all());
         return Redirect::route('branches.show', $branch);
    }
    public function delete(Branch $branch)
    {
       $branch->delete();
       return response()->json(null, 204);
    }
    
}
