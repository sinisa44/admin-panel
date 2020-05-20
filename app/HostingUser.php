<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HostingUser extends Model
{
    protected $guarderd = [];

    public function hosting() {
        return $this->hasOne( 'App\Hosting' );
    }

    public function domain() {
        return $this->hasOne( 'App\Domain' );
    }
}
