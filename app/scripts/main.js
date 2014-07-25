/*global Mytodo, $*/


// window.Mytodo = {
//     Models: {},
//     Collections: {},
//     Views: {},
//     Routers: {},
//     init: function () {
//         'use strict';
//         console.log('Hello from Backbone!');
//     }
// };

// $(document).ready(function () {
//     'use strict';
//     Mytodo.init();
// });

window.Mytodo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        });
    }
};
 
$(document).ready(function () {
    Mytodo.init();
});