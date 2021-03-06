/*
 * Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

require.config({
    paths: {
        backbone: 'find/lib/backbone/backbone-extensions',
        'backbone-base': '../lib/backbone/backbone',
        bootstrap: '../lib/hp-autonomy-bootstrap-2/bootstrap/js/bootstrap',
        colorbox: '../lib/colorbox/jquery.colorbox',
        i18n: '../lib/requirejs-i18n/i18n',
        jquery: '../lib/jquery/jquery',
        'js-whatever': '../lib/hp-autonomy-js-whatever/src',
        json2: '../lib/json/json2',
        'login-page': '../lib/hp-autonomy-login-page/src',
        settings: '../lib/hp-autonomy-settings-page/src',
        text: '../lib/requirejs-text/text',
        underscore: '../lib/underscore/underscore'
    },
    shim: {
        'backbone-base': {
            deps: ['underscore', 'jquery', 'json2'],
            exports: 'Backbone'
        },
        bootstrap: ['jquery'],
        colorbox: ['jquery'],
        underscore: {
            exports: '_'
        }
    }
});