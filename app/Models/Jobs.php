<?php

namespace App\Models;

use App\Traits\UserTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Jobs extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    use UserTrait;

    protected $table = 'jobs';

    protected $primaryKey = 'id';
    // with

    // auto uuid on create
    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->uuid = (string) \Illuminate\Support\Str::uuid();
        });
    }
    
    protected $with = ['JobType', 'media', 'employer'];

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
        'uuid',
        'employer_id',
    ];
    // custom function filter
    public function scopeAvailable($query)
    {
        $query->where('date_expires', '>=', date('Y-m-d'));
    }
    protected $casts = [
        'skills' => 'array',
    ];

    public static $rules = [
        'title' => 'required',
        'description' => 'required',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
          ->useDisk('public');
    }

    public function JobType()
    {
        return $this->belongsTo(JobType::class, 'job_type_id');
    }

    public function images()
    {
        //  return has one Spatie\MediaLibrary\MediaCollections\Models\Media::class
        return $this->hasMany(Media::class, 'model_id')->where('model_type', Jobs::class);
    }

    // has many applications
    public function applicant()
    {
        return $this->hasMany(Applicant::class, 'jobs_id');
    }

    public function applications()
    {
        return $this->hasMany(Applicant::class, 'jobs_id');
    }

    public function employer()
    {
        return $this->belongsTo(\App\Models\Employer::class, 'employer_id');
    }
}
