<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SocialMediaTableSeeder extends Seeder
{
    public function run()
    {
        // Mendapatkan user pertama dari database
        $user = User::first();

        // Menambahkan social media untuk user tersebut
        $user->socialMedia()->create([
            'ig' => 'john_doe_ig',
            'twitter' => 'john_doe_twitter',
            'fb' => 'john_doe_fb',
            'github' => 'john_doe_github',
        ]);
    }
}
