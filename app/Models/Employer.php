<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employer extends Model  implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'address',
        'description',
        'email',
        'phone',
        'website',
        'is_highlighted'
    ];
    // hasone media
    function firstMedia(){
        return $this->hasOne(Media::class,'model_id','id')->where('model_type',self::class);
    }
}
