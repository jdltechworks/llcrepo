<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\Registration;
class RegisterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
    /**
     * https://laravel.com/docs/5.4/validation
     * confused what to use in formating :)
     * @param  Validator $validator [description]
     * @return [type]               [description]
     */
    public function register(Registration $form) {
       $form->persist();
    }
    public function showRegistrationForm() {
        return view('index');
    }
}
