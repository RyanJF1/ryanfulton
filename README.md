## About

This website is used to host my projects and showcase my work. -Ryan Fulton

Site built using Laravel + React
## Start

Login:
Username: admin@localhost
Password: password

Fix character length error:
    Change config/database.php:
    `'charset' => 'utf8',`
    `'collation' => 'utf_unicode_ci',`

Run dev server: `php artisan serve`
Composer update: `composer update`
Composer install: `composer install`
Rebuild database: `php artisan migrate:refresh --seed`

Build code: `npm run watch`
