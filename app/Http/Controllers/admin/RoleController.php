<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Roles;
use App\Models\RolePermissions;
use Illuminate\Support\Facades\Validator;
use App\Library\Role\CreatRole;
use DB;

class RoleController extends Controller
{
    public function index(Request $request) {
        try {
            $intPage =  $request->get('page') == null ? 1: $request->get('page');
            $intLimit = 50;
            $intOffset = ($intPage-1) * $intLimit;
            $arrRoles = Roles::rightJoin('users', 'users.id', '=', 'roles.created_user')
                        ->select([
                            'roles.key', 
                            'roles.name', 
                            'roles.created_at', 
                            'roles.updated_at', 
                            'roles.id',
                            'users.first_name', 
                            'users.last_name']
                        )->orderBy('roles.id', 'desc')
                        ->where(['roles.is_deleted' => '0'])
                        ->offset($intOffset)
                        ->limit($intLimit)
                        ->get();
            $arrReponse = [];
            foreach ($arrRoles as $key => $item) {
                $arrReponse[] = [
                    'id' => $item['id'], 
                    'key' => $item['key'], 
                    'name' => $item['name'], 
                    'created_at' => date('d/m/Y H:i:s', strtotime($item['created_at'])), 
                    'updated_at' => date('d/m/Y H:i:s', strtotime($item['updated_at'])), 
                    'created_user' => $item['first_name'].' '.$item['last_name']
                ];
            }

            return response()->json([
                'message' => 'Tải thành công vai trò',
                'data' => $arrReponse,
                'error' => [],
                'success' => true
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Lỗi truy cập',
                'data' => [],
                'error' => $th,
                'success' => true
            ], 402);
        }
    }

    public function add(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'key' => 'required',
                'name' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $arrRoles = [
                'key' => $request->input('key'),
                'name' => $request->input('name'),
                'updated_user' => 1,
                'created_user' => 1,
                'is_deleted' => 0,
                'updated_at' => date('Y-m-d H:i:s'),
                'created_at' => date('Y-m-d H:i:s'),
            ];

            if(Roles::insert($arrRoles)) {
                return response()->json([
                    'message' => 'Cập nhật thành công vài trò',
                    'data' => $request->all(),
                    'success' => true
                ], 200);
            }else {
                return response()->json([
                    'message' => 'Cập nhật vài trò không thành công',
                    'success' => true
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Lỗi truy cập',
                'data' => [],
                'error' => $th,
                'success' => true
            ], 402);
        }
    }

    public function set(Request $request, $id){
        try {
            $arrRole = Roles::select('*')->where(['id' => $id])->first();
            if(empty($arrRole)){
                return response()->json([
                    'message' => 'Vai trò của không hợp lệ',
                    'success' => false,
                    'data' => [],
                    'code' => 404
                ], 200);
            }

            return response()->json([
                'message' => 'Tải thành công các quyền',
                'success' => true,
                'data' => [
                    'role' => CreatRole::$arrRole,
                    'curent_role' => $arrRole,
                    'permission' => CreatRole::$arrPermission
                ]
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Lỗi truy cập',
                'data' => [],
                'error' => $th,
                'success' => false
            ], 402);
        }
    }

    public function setting(Request $request){
        try {
            $arrValue = [
                'controller' => $request->input('controller'),
                'object' => $request->input('object'),
                'role_id' => $request->input('role_id'),
            ];

            if(RolePermissions::where($arrValue)->count()){
                if(RolePermissions::where(['role_id' => $request->input('role_id')])->update([ 'access' => $request->input('access') ])){

                    return response()->json([
                        'message' => 'Cập nhật quyền thành công',
                        'success' => true,
                        'data' => []
                    ], 200);

                }
            }

            $arrValue = array_merge(
                $arrValue,
                [
                    'access' => $request->input('access'),
                    'updated_user' => 1,
                    'created_user' => 1,
                    'updated_at' => date('Y-m-d H:i:s'),
                    'created_at' => date('Y-m-d H:i:s'),

                ]
            );

            if(RolePermissions::insert($arrValue)){
                return response()->json([
                    'message' => 'Thêm quyền thành công',
                    'success' => true,
                    'data' => []
                ], 200);
            }


        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Lỗi truy cập',
                'data' => [],
                'error' => $th,
                'success' => false
            ], 402);
        }
    }
}
