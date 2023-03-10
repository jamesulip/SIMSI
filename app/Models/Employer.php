<?php

namespace App\Models;

use App\Traits\ClearCacheTrait;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employer extends Model  implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    use ClearCacheTrait;
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
    //
    public function registerMediaCollections(): void
    {
        $this->addmediaCollection('logo')->singleFile();
    }
    // hasone media
    function firstMedia(){
        return $this->hasOne(Media::class,'model_id','id')->where('collection_name','logo')->where('model_type',self::class);
    }
}
