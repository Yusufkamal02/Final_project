<?php

use App\Http\Controllers\master\CatalogController;
use App\Http\Controllers\master\CourseController;
use App\Http\Controllers\master\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/master/users', UserController::class);
    Route::get('/master/users/about/{id}', [UserController::class, 'editAbout'])->name('master.users.update');


    Route::resource('/master/catalog', CatalogController::class);
    Route::post('/purchase-catalog/{catalog}', [CatalogController::class, 'purchaseCatalog']);
    Route::resource('/master/course', CourseController::class);
});

Route::get('/learningpaths', function () {
    // return Inertia::render('LearningPaths');
    return "<h1>Ini adalah Halaman Learning Path</h1>";
})->Middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
