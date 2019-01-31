var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'factura';
	view.query('productos', keystone.list('productos').model.find());
	view.query('clientes', keystone.list('Cliente').model.find());
	view.query('users', keystone.list('users').model.find());

	// Render the view
	view.render('factura');
};
