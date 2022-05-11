<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('/cw-admin')->group(function() {
    Route::get('/{path?}', [App\Http\Controllers\theme\Admin\IndexController::class, 'index'])->where('path', '[a-zA-Z0-9-/]+');
});

Route::get('a', function(){

    $xml = '<some_ns1:List
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:some_ns1="foo:enterprise.some.company.com/some_ns1">
        <some_ns1:SomeObject xsi:type="some_ns1:ListRequests">
            <objs:ItemId>Value1</objs:ItemId>
            <objs:MoreStuff>Value2</objs:MoreStuff>
            <objs:AnotherThing>Value3</objs:AnotherThing>
        </some_ns1:SomeObject>
    </some_ns1:List>';
    $soapBody = new \SoapVar($xml, \XSD_ANYXML);

        $return = $this->client->__SoapCall('Create', array($soapBody));
        $this->logger->debug('Sent SOAP Request XML: ' . $this->getLastRequestXml());
        var_dump($return);

});

Route::get('/dang-ky', function(){
    $value = [
        'password' => Hash::make('123465'),
        'user_name' => 'phuong97nhp',
        'last_name' => "Phương",
        'first_name' => "Nguyễn Hoàng",
        'email' => 'phuong97nhp@gmail.com',
        'phone' => "0962640068",
        'avatar' => "/images/undraw_profile.svg",
        'updated_at' => "2021-03-10 00:09:59",
        'created_at' => "2021-03-10 00:09:59"
    ];
    if(User::insert($value)){
        echo "thành công";
    }
    
});