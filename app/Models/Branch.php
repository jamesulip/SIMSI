<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;
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
