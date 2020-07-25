// eslint-disable-next-line strict
'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elmentClosest from 'element-closest';
elmentClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';


import selectClub from './moduls/selectClub';
import togglePopUp from './moduls/togglePopUp';
import gift from './moduls/gift';
import mainSlider from './moduls/mainSlider';
//import slider from './moduls/slider';
import fixedMenu from './moduls/fixedMenu';
import burgerMenu from './moduls/burgerMenu';
import arrow from './moduls/arrow';
import calc from './moduls/calc';


selectClub();//club select
togglePopUp();//modals
gift();//gift
mainSlider(); // main slider
//slider();//slider
fixedMenu();
burgerMenu();//burger
arrow();
calc();
