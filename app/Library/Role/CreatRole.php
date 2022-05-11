<?php
namespace App\Library\Role;
class CreatRole 
{
    public static $arrAccess = [
        'allow',
        'limit',
    ];

    public static $arrPermission = [
        'refuse' => 'Từ chối',
        'allow' => 'Cho phép',
        'limit' => 'Giới hạn',
    ];

    public static $arrRole = [
        [
            'name' => [
                'vn' => 'Truy cập quản trị'
            ],
            'slug' => 'home',
            'icon' => 'fas fa-tachometer-alt',
            'controller' => 'DashboardsController',
            'status' => 'hide',
            'function' => [
                [
                    'name' => [
                        'vn' => 'Trang tổng quan'
                    ],
                    'object' => 'index',
                    'method' => 'get',
                    'param' => null,
                    'access' => [
                        'allow'
                    ], 
                    'status' => 'hide'
                ],
            ],
        ],
        [
            'name' => [
                'vn' => 'Phân quyền'
            ],
            'slug' => 'role',
            'icon' => 'fas fa-tachometer-alt',
            'controller' => 'DashboardsController',
            'status' => 'hide',
            'function' => [
                [
                    'name' => [
                        'vn' => 'Xem phân quyền'
                    ],
                    'slug' => 'view',
                    'object' => 'view',
                    'method' => 'get',
                    'param' => null,
                    'access' => [
                        'allow',
                        'refuse'
                    ], 
                    'status' => 'hide'
                ],
                [
                    'name' => [
                        'vn' => 'Xem phân quyền'
                    ],
                    'slug' => 'view',
                    'object' => 'view',
                    'method' => 'get',
                    'param' => null,
                    'access' => [
                        'allow',
                        'refuse'
                    ], 
                    'status' => 'hide'
                ],
            ],
        ],
    ];
}