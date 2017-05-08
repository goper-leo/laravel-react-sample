<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Onerent</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/assets/css/bootstrap.css">
        <link href="/assets/css/app.css" rel="stylesheet" type="text/css">

        <script src="/assets/vendors/jquery.min.js"></script>

        @yield('inline_css')
    </head>
    <body>

      <div class="container-fluid">
        @include('widgets.header')

        @yield('body')

        @include('widgets.footer')
      </div>


      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/vendors/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
      @yield('inline_scripts')

    </body>
</html>
