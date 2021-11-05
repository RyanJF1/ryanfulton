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
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Welcome to my portfolio!') }}</div>

                    <div class="card-body">

                        {{{ ('It\'s a work in progress, but there is much to come!') }}}
                    </div>

                    <div class="card-body">
                        {!! ('In the meantime, check out my projects on <a href="https://github.com/RyanJF1">GitHub</a> or see what I\'m up to on <a href="https://linkedin.com/in/ryan-fulton">LinkedIn</a>.') !!}
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
@endsection
