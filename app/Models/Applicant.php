<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
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
        'job_id'
    ];
    // hasone ApplicantStatus
    public function applicantStatus()
    {
        return $this->hasOne(ApplicantStatus::class, 'id', 'applicant_status_id');
    }
}
