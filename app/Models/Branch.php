<?php

namespace App\Models;

use App\Traits\ClearCacheTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Branch extends Model
{
    use HasFactory;
     use ClearCacheTrait;
    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
        'website',
        'google_map_embbeded_url',
        'office_hours'
    ];
    protected $casts = [
        'phone' => 'array',
        'email' => 'array',
    ];
}
