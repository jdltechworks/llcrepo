<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function showLoginForm() {
        return view('index');
    }
    public function login(Request $request)
    {
        if (Auth::attempt($request->all())) {
            // Authentication passed...
            return response(Auth::user(), 200);
        } else {
            return response([ 'error' => 'Invalid login credentials'], 401);
        }
    }
    public function logout() {
        Auth::logout();
        return response([ 'session' => '']);
    }
}
