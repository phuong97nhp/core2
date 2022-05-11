<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('titleAdmin')</title>
    <!-- Styles -->
    <link href="{{ asset('assets-admin/css/all.min.css') }}" rel="stylesheet">

    <script>
        url_home =  '{{asset('/')}}';
    </script>

</head>
<body id="page-top">
<div id="root"></div>
<script src="{{ asset('js/app.js') }}"></script>
{{-- jquery --}}
<script src="{{ asset('assets-admin/vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('assets-admin/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- Core plugin JavaScript-->
<script src="{{ asset('assets-admin/vendor/jquery-easing/jquery.easing.min.js') }}"></script>
<!-- Custom scripts for all pages-->
<script src="{{ asset('assets-admin/js/sb-admin-2.min.js') }}"></script>
<!-- Page level plugins -->
<script src="{{ asset('assets-admin/vendor/chart.js/Chart.min.js') }}"></script>
<!-- Page level custom scripts -->
{{-- <script src="{{ asset('assets-admin/js/demo/chart-area-demo.js') }}"></script> --}}
{{-- <script src="{{ asset('assets-admin/js/demo/chart-pie-demo.js') }}"></script> --}}
<script src="{{ asset('assets-admin/js/all.min.js') }}"></script>
</body>
</html>