<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Vue</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app" class=" pt-4 pb-4" style="margin-right:0!important;background-color:#455a64 ;    height: 100%;">
    @if(!preg_match("/^\/entrepriseDetails\/?(?:[^\/]+\/?)*$/",parse_url(Request::url(),PHP_URL_PATH)) && !preg_match('/^\/employeDetails\/?(?:[^\/]+\/?)*$/',parse_url(Request::url(),PHP_URL_PATH)))
    <navbar></navbar>
    @endif
    <div class="mr-4">
        @if(!preg_match("/^\/entrepriseDetails\/?(?:[^\/]+\/?)*$/",parse_url(Request::url(),PHP_URL_PATH)) && !preg_match('/^\/employeDetails\/?(?:[^\/]+\/?)*$/',parse_url(Request::url(),PHP_URL_PATH)))

        <router-view class="contain " id="contain" style="margin-left:100px;background-color:#b0bec5b3" ></router-view>
        @else
        <router-view ></router-view>
        @endif

        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>

