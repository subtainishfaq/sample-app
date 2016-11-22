"use strict";
// Imports
var owic_route_1 = require('./owic/owic.route');
var person_route_1 = require('./person/person.route');
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }
].concat(owic_route_1.OwicRoutes, person_route_1.PersonRoutes);
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map