<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolePermissions extends Model
{
    use HasFactory;
    
    protected $table = 'role_permissions';

    protected $fillable = [
        'id',
        'role_id',
        'access',
        'controller',
        'object',
        'updated_user',
        'created_user',
    ];

}
