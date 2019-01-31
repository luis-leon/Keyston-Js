/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */
 // dentro de este archivo se puede modificar todo lo que aparece en el index principal de la pagina administrador


var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
app.get('/',routes.views.index);

//  // API
//app.get('/api/planet', routes.api.planet.list);
//app.get('/api/planets/:id', routes.api.planet.get);
//app.post('/api/planets', routes.api.planet.create);
//app.put('/api/planets/:id', routes.api.planet.update);
//app.delete('/api/planets/:id', routes.api.planet.remove);
// Views
app.get('/', routes.views.index);
app.get('/blog/:category?', routes.views.blog);
app.get('/blog/post/:post', routes.views.post);
app.get('/gallery', routes.views.gallery);
app.get('/cliente', routes.views.cliente);
app.get('/productos', routes.views.productos);
app.get('/reporte', routes.views.reporte);
app.get('/factura', routes.views.factura);
app.get('/detalles_factura', routes.views.detalles_factura);
app.all('/contact', routes.views.contact);


	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
