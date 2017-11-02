<?php
namespace App\Http\Requests\Contact;

use App\Models\User;
use App\Mail\MessageReceived;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ContactForm extends FormRequest
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
            'email' => 'required|string|email|max:255',
            'message' => 'required|string'
        ];
    }

    public function persist()
    {
        $messageDetails = $this;
        \Mail::to('jdltech@llcsolutions.org')->send(new MessageReceived($messageDetails));

        return response(['request' => 'gfee']);
    }
}
