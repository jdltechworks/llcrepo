<?php
namespace App\Http\Requests\User;
use App\Models\User;
use App\Mail\Verification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Registration extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ];
    }
    public function persist() {
        $code = str_random(30);
        $user = new User;
        $user->name = $this->input('name');
        $user->email = $this->input('email');
        $user->password = Hash::make($this->input('password'));
        $user->confirmation_code = $code;
        $user->save();
        auth()->login($user);
        Mail::to($user)->send(new Verification($user));
    }
}
