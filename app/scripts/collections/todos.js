/*global Mytodo, Backbone*/

// Mytodo.Collections = Mytodo.Collections || {};

// (function () {
//     'use strict';

//     Mytodo.Collections.Todos = Backbone.Collection.extend({

//         model: Mytodo.Models.Todos

//     });

// })();

Mytodo.Collections.TodosCollection = Backbone.Collection.extend({
 
    localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
 
    initialize: function () {
        this.model = Mytodo.Models.TodoModel;
    }
 
});