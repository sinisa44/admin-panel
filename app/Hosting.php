<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hosting extends Model
{
    protected $guarded = [];


    public function hosting_user() {
        return $this->belongsTo( 'App\HostingUser' );
    }
}
