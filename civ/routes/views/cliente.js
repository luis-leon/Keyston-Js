var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	locals.section = 'cliente';
	view.query('clientes', keystone.list('Cliente').model.find());
	view.render('cliente');

};
