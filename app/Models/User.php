<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'city',
        'address',
        'email',
        'phonenumber',
        'birthday',
        'organization',
        'role',
        'departemen',
        'postalcode',
        'role_id',
        'password',
        'about',
        'institution',
        'gambar'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function socialMedia()
    {
        return $this->hasOne(SocialMedia::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function catalogCourses()
    {
        return $this->hasMany(CatalogCourse::class);
    }
}
