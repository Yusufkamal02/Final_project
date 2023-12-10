<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan beberapa role contoh
        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'User']);
    }
}
