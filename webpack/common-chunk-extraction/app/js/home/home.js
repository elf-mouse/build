//require('./style.css');
//require('./style.less');
//require('./../../css/home.less');
//require('./style.scss'); // not work :(

import homePage from './homePage';
import dashboard from './dashboard';

// 1
//import { name as sidebarName, run as sidebarRun } from './sidebar';
//console.log(sidebarName);
//sidebarRun();

// 2
import sidebar from './sidebar';
console.log(sidebar.name);
sidebar.run();

console.log('home');
console.log(homePage);
