<?php

namespace App\Traits;

use Illuminate\Support\Facades\Cache;

trait ClearCacheTrait
{
    public static function bootClearCacheTrait()
    {
        static::created(function () {
            Cache::flush();
        });

        static::updated(function () {
            Cache::flush();
        });

        static::deleted(function () {
            Cache::flush();
        });


    }
}
