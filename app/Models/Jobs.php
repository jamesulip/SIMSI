<?php

namespace App\Models;

use App\Traits\UserTrait;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Jobs extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    use UserTrait;

    // with
    protected $with = ['JobType'];

    protected $fillable = [
        'title',
        'description',
        'location',
        'salary',
        'show_salary',
        'skills',
        'text_description',
        'job_type_id',
        'active',
        'date_posted',
        'date_expires',
        'created_by',
        'updated_by',

    ];

    protected $casts = [
        'skills' => 'array',
    ];
    public static $rules = [
        'title' => 'required',
        'description' => 'required',
    ];

    /**
     * Get the user associated with the Jobs
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function JobType()
    {
        return $this->belongsTo(JobType::class, 'job_type_id');
    }

}
