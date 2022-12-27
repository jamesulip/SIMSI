<?php
namespace App\Traits;

trait UserTrait
{
    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->created_by = auth()->user()->id;
        });
        static::updating(function ($model) {
            if (\Schema::hasColumn($model->getTable(), 'updated_by')) {
                $model->updated_by = auth()->user()->id;
            }
        });
    }
}
