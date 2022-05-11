<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory, Notifiable;
    
    protected $table = 'roles';

    protected $fillable = [
        'key',
        'name',
        'updated_user',
        'created_user',
        'is_deleted',
    ];

}
