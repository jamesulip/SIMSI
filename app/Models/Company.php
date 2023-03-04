<?php

namespace App\Models;

use App\Traits\ClearCacheTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends Model
{
    use HasFactory;
    use ClearCacheTrait;
    protected $fillable = [
        'company_name',
        'poea',
];
}
