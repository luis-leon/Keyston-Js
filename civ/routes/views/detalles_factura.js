var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'detalles_factura';
	view.query('productos', keystone.list('productos').model.find());
	view.query('clientes', keystone.list('Cliente').model.find());
	view.query('Users', keystone.list('users').model.find());
	view.query('factura', keystone.list('Factura').model.find());
	view.query('detalleFactura', keystone.list('DetalleFactura').model.find());
	// Render the view
	view.render('detalles_factura');
};
