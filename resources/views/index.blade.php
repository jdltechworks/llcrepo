<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>LLCSolutions</title>
        <link rel="icon" href="favicon.ico" sizes="16x16">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body>
      <div id="app">
      </div>
      <script src={{mix('js/app.js')}}></script>
      <script>
        var props = {
            csrfToken: "{{csrf_token()}}"
        };
        getInitialProps(props, 'app');
      </script>
    </body>
</html>
