<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Applicant extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    // auto fill uuid
    // default with
    protected $with = ['applicantStatus'];
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->uuid = (string) \Illuminate\Support\Str::uuid();
        });
    }
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'jobs_id',
        'applicant_status_id',
        'birthdate',
        'gender'
    ];

    // hasone ApplicantStatus
    public function applicantStatus()
    {
        return $this->hasOne(ApplicantStatus::class, 'id', 'applicant_status_id');
    }
    // hasOne media
    public function resume()
    {
        return $this->hasOne(Media::class, 'model_id', 'id')->where('collection_name', 'resume');
    }

}
