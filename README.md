## About

This website is used to host my projects and showcase my work. -Ryan Fulton

Site built using Laravel + React

View the ryanfulton repository on GitHub: https://github.com/RyanJF1/ryanfulton
## Start

Default Login
Username: `admin@localhost`
Password: `password`

Adding to webserver
1. Clone repo to repositories
2. SSH into webserver, CD to repo, and run `composer update` to install dependencies
3. Change index.php lines to 
`require __DIR__.'/../../repositories/<repo>/vendor/autoload.php';`
`$app = require_once __DIR__.'/../../repositories/<repo>/bootstrap/app.php';`
4. Configure database
5. Configure environment file: /.env
5. Migrate the database with `php artisan migrate refresh --seed`

## Help

Fix character length error:
    Change config/database.php:
    `'charset' => 'utf8',`
    `'collation' => 'utf_unicode_ci',`

Run dev server: `php artisan serve`
Composer update: `composer update`
Composer install: `composer install`
Rebuild database: `php artisan migrate:refresh --seed`

Build code: `npm run watch`
