/*
 * Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([
    'backbone'
], function(Backbone) {

    return Backbone.Collection.extend({

        url: '../api/search/find-related-concepts',

        fetch: function(options) {
            return Backbone.Collection.prototype.fetch.call(this, _.defaults(options, {
                reset: true
            }));
        }

    })

});
