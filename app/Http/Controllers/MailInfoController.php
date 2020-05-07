<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailInfoController extends Controller
{
    public function index(){
        return view( 'mailinfo.index' );
    }
}
