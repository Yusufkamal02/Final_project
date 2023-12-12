<?php

namespace App\Http\Controllers\master;

use App\Http\Controllers\Controller;
use App\Models\CatalogCourse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CourseController extends Controller
{

    public function index()
    {

        $userImageUrl = asset('Catalog/default.png');

        $catalogCourses = CatalogCourse::all();
        return inertia('Course/Index', [
            'catalogCourses' => $catalogCourses,
            'userImageUrl' => $userImageUrl,
        ]);
    }

    public function create()
    {
        $users = User::all();
        return view('catalog.create', compact('users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'user_id' => [
                'required',
                'exists:users,id',
                Rule::in(User::pluck('id')->toArray()),
            ],
        ]);

        CatalogCourse::create($request->all());

        return redirect()->route('catalog.index')->with('success', 'Course created successfully.');
    }

    public function edit(CatalogCourse $course)
    {
        $users = User::all();
        return view('catalog.edit', compact('course', 'users'));
    }

    public function update(Request $request, CatalogCourse $course)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'user_id' => [
                'required',
                'exists:users,id',
                Rule::in(User::pluck('id')->toArray()),
            ],
        ]);

        $course->update($request->all());

        return redirect()->route('catalog.index')->with('success', 'Course updated successfully.');
    }

    public function destroy(CatalogCourse $course)
    {
        $course->delete();

        return redirect()->route('catalog.index')->with('success', 'Course deleted successfully.');
    }
}
