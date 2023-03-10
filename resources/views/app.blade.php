<!DOCTYPE html>
<html id="home" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {!! \App\Meta::render() !!}
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <!-- favicon -->
        <link rel="icon" href="/logo.png" type="image/x-icon">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Scripts -->
        @routes
        @vite('resources/js/app.js')

        @inertiaHead


    </head>
    <body class="font-sans antialiased">
        @inertia
        <div id="map"></div>
        <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFjbtKGHd2teT6ptzamEqCrCoqe0Ug7oU&callback=initMap&v=weekly"
            defer
            ></script>
    </body>
</html>
