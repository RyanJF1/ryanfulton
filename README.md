## About

This website is used to host my projects and showcase my work.

https://ryanfulton.co/

Site built using Laravel + React

View the ryanfulton repository on GitHub: https://github.com/RyanJF1/ryanfulton
## Start

Requirements:
- PHP 7.4+ : https://www.php.net/downloads.php
- Node v16+ : https://nodejs.dev/download/

1. `composer install` to install vendor folder
2. `npm install` to install node_modules folder
3.  Rename .env.example to .env and configure environment
4. `php artisan key:generate` to generate APP_KEY
5. `docker-compose build` to build containers
6. `docker-compose up -d` to bring containers up in detached mode
7.  Build code with `npm run dev`

Web App: http://localhost:9000

Web App Login
Username: `admin@localhost`
Password: `password`

## Help

Run commands inside container with `docker-compose run app <comamnd>`
