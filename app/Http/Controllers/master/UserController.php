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
        $users = User::with('role')->get();

        // Get currently authenticated user
        $turu = Auth::user();

        return inertia('Profile/Index', ['users' => $users, 'turu' => $turu]);
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
        $user = Auth::user();
        $roles = Role::get();

        return Inertia::render('Profile/Custom/Edit', ['user' => $user, 'roles' => $roles]);
    }

    // public function update(Request $request, User $user)
    // {
    // $request->validate($this->validationRules($user->id));

    // // just testing
    // // return dd($request->all());

    // $user->update($request->all());

    // return Inertia::location(route('users.index'));

    // // Masih Burique code ini
    // // return Inertia::location(route('users.index', [
    // //     'success' => 'User updated successfully!'
    // // ]));
    // }

    public function update(Request $request)
    {
        // return dd($request->all());
        $user = Auth::user();

        // Validasi data yang diterima dari formulir jika diperlukan
        // request()->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|email|unique:users,email,' . $user->id,
        //     // tambahkan validasi lainnya sesuai kebutuhan
        // ]);

        // Update data profil pengguna
        $user->update(request()->all());
        // return dd($request->all());
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
