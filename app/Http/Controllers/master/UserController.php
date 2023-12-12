<?php

namespace App\Http\Controllers\master;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;


class UserController extends Controller
{
    public function index()
    {
        // Get all users with their roles
        $users = User::with('role')->get();

        // Get currently authenticated user
        $authenticatedUser = Auth::user();

        // Check if user is authenticated
        if (!$authenticatedUser) {
            // Handle the case where the user is not authenticated
            // For example, you can redirect to the login page
            return redirect()->route('login');
        }

        // Get the URL for the user's image, or use a default image URL
        $userImageUrl = $authenticatedUser->gambar ? asset('Profile/' . $authenticatedUser->gambar) : asset('Profile/default.png');

        return inertia('Profile/Index', [
            'users' => $users,
            'authenticatedUser' => $authenticatedUser,
            'userImageUrl' => $userImageUrl,
        ]);
    }

    public function create()
    {
        $roles = Role::all();
        return inertia('Profile/Custom/Create', ['roles' => $roles]);
    }

    public function show(User $user)
    {
        return inertia('Profile/Custom/Show', ['user' => $user]);
    }

    public function store(Request $request)
    {
        $request->validate($this->validationRules());

        User::create($request->all());

        // just testing
        // return dd($request->all());

        return Inertia::location(route('users.index'));
    }

    // public function edit(User $user)
    // {
    //     $roles = Role::all();
    //     return inertia('Profile/Custom/Edit', ['user' => $user, 'roles' => $roles]);
    // }

    // public function update(Request $request, User $user)
    // {
    //     $request->validate($this->validationRules($user->id));

    //     // just testing
    //     // return dd($request->all());

    //     $user->update($request->all());

    //     return Inertia::location(route('users.index'));

    //     // Masih Burique code ini
    //     // return Inertia::location(route('users.index', [
    //     //     'success' => 'User updated successfully!'
    //     // ]));
    // }

    public function edit()
    {
        // Get currently authenticated user
        $authenticatedUser = Auth::user();

        // Check if user is authenticated
        if (!$authenticatedUser) {
            // Handle the case where the user is not authenticated
            // For example, you can redirect to the login page
            return redirect()->route('login');
        }

        // Get all roles
        $roles = Role::get();

        // Get the URL for the user's image, or use a default image URL
        $userImageUrl = $authenticatedUser->gambar ? asset('Profile/' . $authenticatedUser->gambar) : asset('Profile/default.png');

        // Share the CSRF token with Inertia views
        Inertia::share('csrf_token', csrf_token());

        return Inertia::render('Profile/Custom/Edit', [
            'authenticatedUser' => $authenticatedUser,
            'roles' => $roles,
            'userImageUrl' => $userImageUrl,
        ]);
    }



    public function update(Request $request)
    {
        $user = Auth::user();

        // Validasi data yang diterima dari formulir jika diperlukan
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phonenumber' => 'required|string|max:255',
            'birthday' => 'required|date',
            'organization' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'about' => 'required|string',
            'postalcode' => 'required|string|max:255',
            'role_id' => 'required|exists:roles,id',
            'newImage' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validate image upload
            // Add other validation rules as needed
        ]);

        // Update data profil pengguna
        $user->update($request->except('newImage')); // Update other fields except 'newImage'

        // Handle image upload
        if ($request->hasFile('newImage')) {
            // Store the uploaded image in the 'profile' directory within the storage folder
            $path = $request->file('newImage')->store('profile', 'public');

            // Update the user's 'gambar' field with the stored image path
            $user->update(['gambar' => $path]);
        }

        // Redirect ke halaman profil atau halaman lainnya setelah berhasil update
        return Inertia::location(route('users.index'));
    }
    public function destroy(User $user)
    {
        $user->delete();

        return Inertia::location(route('users.index'));
    }

    private function validationRules($userId = null)
    {
        $rules = [
            'firstname' => 'string|max:255',
            'lastname' => 'string|max:255',
            'city' => 'string|max:255',
            'address' => 'string|max:255',
            'email' => [
                'email',
                'max:255',
                Rule::unique('users')->ignore($userId),
            ],
            'phonenumber' => 'string|max:20',
            'birthday' => 'date',
            'organization' => 'string|max:255',
            'institution' => 'string|max:255',
            'postalcode' => 'string|max:10',
            'role_id' => ['required', Rule::in(Role::pluck('id')->all())],
        ];

        if ($userId === null) {
            $rules['firstname'] .= '|required';
            $rules['lastname'] .= '|required';
            $rules['city'] .= '|required';
            $rules['address'] .= '|required';
            $rules['email'][] = 'required';
            $rules['phonenumber'] .= '|required';
            $rules['birthday'] .= '|required';
            $rules['organization'] .= '|required';
            $rules['institution'] .= '|required';
            $rules['postalcode'] .= '|required';
            $rules['password'] = 'required|min:8';
        } else {
            $rules['password'] = 'nullable|min:8';
        }

        return $rules;
    }
}
