@extends('layouts.app')

@section('content')
<body class="antialiased">
    <div
        class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        <div class="text-center">

            <img src="{{ asset('images/ryanfulton_logo.png') }}" />

        </div>
    </div>

    <div class="container">
        <div id="card" style="margin-bottom: 10px;" data-title="Welcome to my portfolio!" data-body="It's a work in progress, but there is much more to come!"></div>
        <div id="textbox" data-body="In the meantime, check out my projects on GitHub or see what I'm up to on LinkedIn."></div>
    </div>

</body>
@endsection
