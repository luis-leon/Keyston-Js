var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	locals.section = 'productos';
	view.query('productos', keystone.list('productos').model.find());
	view.render('productos');

};
