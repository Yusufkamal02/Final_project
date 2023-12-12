<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run()
    {        // Menambahkan satu user dengan role 'Admin'
        $imagePath = 'default.png'; // Sesuaikan dengan path gambar default Anda

        // Mendapatkan role dengan nama 'User'
        $userRole = Role::where('name', 'User')->first();

        // Menambahkan satu user dengan role 'User'
        User::create([
            'firstname' => 'John',
            'lastname' => 'Doe',
            'city' => 'City',
            'address' => 'Address',
            'email' => 'john@example.com',
            'phonenumber' => '123456789',
            'birthday' => '1990-01-01',
            'organization' => 'Org',
            'departemen' => 'Department',
            'institution' => 'Poltek IDN Bogor',
            'about' => 'Tortor condimentum lacinia quis vel eros donec ac odio tempor. Quis hendrerit dolor magna eget est lorem ipsum dolor. Odio facilisis mauris sit amet massa vitae. Dictum at tempor commodo ullamcorper a. Nunc pulvinar sapien et ligula ullamcorper malesuada. Vivamus at augue eget arcu dictum varius duis at consectetur. Malesuada proin libero nunc consequat interdum varius sit. Sed blandit libero volutpat sed cras ornare arcu dui. Faucibus nisl tincidunt eget nullam. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Elementum eu facilisis sed odio morbi quis. Non blandit massa enim nec dui nunc mattis enim ut. Aliquet lectus proin nibh nisl condimentum id. A pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus.',
            'postalcode' => '12345',
            'gambar' => $imagePath,
            'role_id' => $userRole->id, // Menggunakan role_id yang sudah didapatkan
            'password' => bcrypt('idnmantap'),
        ]);

        // Mendapatkan role dengan nama 'Admin'
        $adminRole = Role::where('name', 'Admin')->first();

        User::create([
            'firstname' => 'Admin',
            'lastname' => 'User',
            'city' => 'Bekasi',
            'address' => 'Jl Mercu Buana no 9',
            'email' => 'admin@gmail.com',
            'phonenumber' => '987654321',
            'birthday' => '1980-01-01',
            'organization' => 'Web Developer',
            'departemen' => 'Kesehatan',
            'institution' => 'Poltek IDN Bogor',
            'about' => 'Tortor condimentum lacinia quis vel eros donec ac odio tempor. Quis hendrerit dolor magna eget est lorem ipsum dolor. Odio facilisis mauris sit amet massa vitae. Dictum at tempor commodo ullamcorper a. Nunc pulvinar sapien et ligula ullamcorper malesuada. Vivamus at augue eget arcu dictum varius duis at consectetur. Malesuada proin libero nunc consequat interdum varius sit. Sed blandit libero volutpat sed cras ornare arcu dui. Faucibus nisl tincidunt eget nullam. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Elementum eu facilisis sed odio morbi quis. Non blandit massa enim nec dui nunc mattis enim ut. Aliquet lectus proin nibh nisl condimentum id. A pellentesque sit amet porttitor. At tempor commodo ullamcorper a lacus.',
            'postalcode' => '54321',
            'role_id' => $adminRole->id,
            'password' => bcrypt('password'),
            'gambar' => $imagePath,
        ]);
    }
}
