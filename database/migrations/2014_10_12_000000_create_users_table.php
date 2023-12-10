<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('city');
            $table->string('address');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phonenumber');
            $table->date('birthday');
            $table->string('organization');
            $table->unsignedBigInteger('role_id'); // Menggunakan unsignedBigInteger
            $table->foreign('role_id')->references('id')->on('roles'); // Menambahkan foreign key constraint
            $table->text('about')->nullable();
            $table->text('institution');
            $table->string('departemen');
            $table->string('postalcode');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
