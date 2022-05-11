<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Auth;

class UsersController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    
    public function onLogin(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);


        // $strEmail = (empty($request->input('email'))) ? '' : trim($request->input('email'));
        // $strPassword = (empty($request->input('password'))) ? '' : trim($request->input('password'));
        // $intRemember = (empty($request->boolean('remember'))) ? 0 : trim($request->boolean('remember'));

        // if (empty($strEmail)) {
        //     $arrReponse = [
        //         'success' => false,
        //         'code' => 500,
        //         'messenger' => 'Cần nhập vào địa chỉ email.',
        //         'data' => [],
        //         'error' => []
        //     ];
        //     return response()->json($arrReponse, 200);
        // }

        // if (!filter_var($strEmail, FILTER_VALIDATE_EMAIL)) {
        //     $arrReponse = [
        //         'success' => false,
        //         'code' => 500,
        //         'messenger' => 'Địa chỉ email không đúng định dạng.',
        //         'data' => [],
        //         'error' => []
        //     ];
        //     return response()->json($arrReponse, 200);
        // }

        // if (empty($strPassword)) {
        //     $arrReponse = [
        //         'success' => false,
        //         'code' => 500,
        //         'messenger' => 'Cần nhập vào mật khẩu.',
        //         'data' => [],
        //         'error' => []
        //     ];
        //     return response()->json($arrReponse, 200);
        // }
        
        // if (Auth::attempt(array('email' => $strEmail, 'password' => $strPassword), $intRemember)) {
        //     if(Auth::check()){
        //         $arrReponse = [
        //             'success' => true,
        //             'code' => 200,
        //             'messenger' => 'Đăng nhập thành công.',
        //             'data' => [],
        //             'error' => []
        //         ];
        //         return response()->json($arrReponse, 200);
        //     }
        // } else {
        //     $arrReponse = [
        //         'success' => false,
        //         'code' => 500,
        //         'messenger' => 'Tài khoản hoặc mật khẩu không chính xác.',
        //         'data' => [],
        //         'error' => []
        //     ];
        //     return response()->json($arrReponse, 200);
        // }
    }
}
