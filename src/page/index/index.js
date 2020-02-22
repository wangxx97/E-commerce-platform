'use strict';

/*!!!!!!!!!!!!!!!!!!!!!!!!!*/
// var $ = require('jquery');
// $('body').html('HELLO INDEX');

// var $$ = require('jquery');
// console.log('Hello index');
// $$('body').html('index HELLO~~~~~~~~~~~~~~~');

// require('./index.css');
// require('../module.js');

var _mm = require('util/mm');
// alert(123);

// _mm.request({
//     url: './test.do',
//     success: function (res) {
//         console.log(res);
//     },
//     error: function (errMsg) {
//         console.log(errMsg)
//     }
// });
//

// console.log(_mm.getUrlParam('test'));

var html = '<div>{{data}}</div>';
var data = {
    data: 'test'
}

console.log(_mm.renderHtml(html, data));







