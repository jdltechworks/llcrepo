<?php
namespace App\Http\Requests\Contact;
use App\Models\User;
use App\Mail\Verification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Contact extends FormRequest
{

}
