/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
require('../css/app.css');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from 'react';
 import ReactRenderer from './src/ReactRenderer';

require('./src/components/Card');
require('./src/components/Button');
require('./src/components/Textbox');

 import Card from './src/components/Card';
 import Button from './src/components/Button';
 import Textbox from './src/components/Textbox';

 const components = [
   {
     name: "Card",
     component: <Card />,
   },
   {
    name: "Button",
    component: <Button />,
  },
  {
    name: "Textbox",
    component: <Textbox />,
  },
 ]

 new ReactRenderer(components).renderAll();
