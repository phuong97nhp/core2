<?php

namespace App\Http\Controllers\theme\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index() {
        return view('theme.admin.index');
    }
}
