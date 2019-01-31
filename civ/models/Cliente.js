var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */




var Cliente = new keystone.List('Cliente');//crea nuevas tablas

var Cliente = new keystone.List('Cliente', {
 autokey: { path: 'slug', from: 'title', unique: true }
});




Cliente.add({

	dpi: { type: Types.Textarea,initial:true, index: true , unique: true},
	name:{ type: Types.Textarea, initial:true, index: true },
	apellido:{ type: Types.Textarea ,initial: true, required: true, index: true },
	direccion:{ type: Types.Textarea ,initial: true, required: true, index: true },
	telefono:{ type: Types.Textarea ,initial: true, required: true, index: true },
	email:{ type: Types.Email ,initial: true, required: true, index: true },


}, 'Permissions', {

	//isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },//define nuevas tablas
});

// Provide access to Keystone
Cliente.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Cliente.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
Cliente.relationship({ path: 'dpi', ref: 'Factura', refPath: 'idCliente' });

/**
 * Registration
 */
Cliente.defaultColumns = 'dpi,nombre,apellido,direccion,telefono,email';
Cliente.register();
