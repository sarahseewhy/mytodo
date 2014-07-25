/*global Mytodo, Backbone*/

Mytodo.Models = Mytodo.Models || {};

(function () {
    'use strict';

    Mytodo.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
