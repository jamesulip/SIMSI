<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //
    function index(){
       return Inertia::render('Company',
       [
           'company' => \App\Models\Company::first(),
       ]);
    }
    function update(Request $request){
        $request->validate([
            'company_name' => 'required',
            'poea' => 'required',
        ]);
        $company = \App\Models\Company::first();
        $company->company_name = $request->company_name;
        $company->poea = $request->poea;
        $company->save();
        return redirect()->back()->with('success', 'Company updated successfully.');
    }
}
