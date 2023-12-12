<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CatalogCourse;

class CatalogCoursesTableSeeder extends Seeder
{
    public function run()
    {
        // Tambahkan data kursus
        $webDeveloperCourses = [
            [
                'title' => 'Full Stack Web Development Bootcamp',
                'price' => '1.500.000',
                'description' => 'This comprehensive bootcamp is designed to turn you into a skilled full-stack web developer. Explore front-end technologies like HTML, CSS, and JavaScript, and dive deep into back-end development with Node.js and Express. Build real-world projects, and learn to deploy and maintain robust web applications.',
                'image_url' => 'https://source.unsplash.com/600x400/?developer',
                'user_id' => 1,
            ],
            [
                'title' => 'Advanced JavaScript and ES6+',
                'price' => '1.200.000',
                'description' => 'Take your JavaScript skills to the next level with this course. Master advanced features of the language, including ES6+ syntax, asynchronous programming, and functional programming concepts. Gain hands-on experience through practical exercises and projects.',
                'image_url' => 'https://source.unsplash.com/600x400/?coding',
                'user_id' => 1,
            ],
            [
                'title' => 'React and Redux Mastery',
                'price' => '1.800.000',
                'description' => 'Become a React.js and Redux expert with this in-depth mastery course. Learn the fundamentals of React for building user interfaces and delve into advanced state management with Redux. Create interactive and dynamic web applications with confidence.',
                'image_url' => 'https://source.unsplash.com/600x400/?react',
                'user_id' => 1,
            ],
            [
                'title' => 'Node.js and Express for Backend Development',
                'price' => '1.700.000',
                'description' => 'Unlock the power of server-side development with Node.js and Express. Explore the basics of building RESTful APIs, connecting to databases, and handling authentication. Build scalable and efficient backend systems for your web applications.',
                'image_url' => 'https://source.unsplash.com/600x400/?nodejs',
                'user_id' => 1,
            ],
            [
                'title' => 'Building APIs with Laravel',
                'price' => '1.700.000',
                'description' => 'Learn to create robust and secure RESTful APIs using the Laravel PHP framework. Understand the principles of API design, authentication, and versioning. Develop skills to build scalable and maintainable backend systems for your web and mobile applications.',
                'image_url' => 'https://source.unsplash.com/600x400/?laravel',
                'user_id' => 1,
            ],
            [
                'title' => 'Vue.js: Frontend Framework for Modern Web Development',
                'price' => '1.500.000',
                'description' => 'Discover the power of Vue.js for building modern and reactive user interfaces. Dive into Vue.js components, state management with Vuex, and routing with Vue Router. Develop dynamic and responsive web applications with Vue.js.',
                'image_url' => 'https://source.unsplash.com/600x400/?vuejs',
                'user_id' => 1,
            ],
            [
                'title' => 'Docker for Web Developers',
                'price' => '1.300.000',
                'description' => 'Master containerization and deployment with Docker. Learn to containerize your web applications, manage dependencies, and deploy applications in a consistent and scalable way. Streamline your development workflow with Docker.',
                'image_url' => 'https://source.unsplash.com/600x400/?docker',
                'user_id' => 1,
            ],
            [
                'title' => 'Responsive Web Design with CSS Grid and Flexbox',
                'price' => '1.000.000',
                'description' => 'Explore modern layout techniques for creating responsive web designs. Dive into CSS Grid and Flexbox to create flexible and adaptive layouts. Ensure your websites look great on devices of all sizes with responsive design principles.',
                'image_url' => 'https://source.unsplash.com/600x400/?css',
                'user_id' => 1,
            ],
            // Tambahkan data kursus lainnya sesuai kebutuhan
        ];


        foreach ($webDeveloperCourses as $course) {
            CatalogCourse::create($course);
        }
    }
}
