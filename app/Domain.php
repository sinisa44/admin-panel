<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    protected $guarded = [];

    public function hosting_user() {
        return $this->belongsTo( 'App\HostingUser');
    }
}
