<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatalogCourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'description',
        'user_id',
        'image_url'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
