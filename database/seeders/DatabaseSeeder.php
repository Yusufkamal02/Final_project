<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolesTableSeeder::class,
            UserTableSeeder::class,
            SocialMediaTableSeeder::class,
            CatalogCoursesTableSeeder::class,
        ]);
    }
}
