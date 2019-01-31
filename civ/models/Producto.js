var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Producto = new keystone.List('Producto');//crea nuevas tablas

var Producto = new keystone.List('Producto', {
 autokey: { path: 'slug', from: 'title', unique: true }
});



Producto.add({

	nombre: { type: Types.Textarea, initial:true, index: true },
	price: { type: Types.Money, initial:true, index: true },
	CodigoBarras: { type: Types.Textarea, initial:true, index: true },
	description:{ type: Types.Textarea ,initial: true, required: true, index: true },
	descuento1: { type: Types.Money, initial:true, index: true },
	descuento2: { type: Types.Money, initial:true, index: true },
	descuento3: { type: Types.Money, initial:true, index: true },
	stock: { type: Types.Number, initial: true, required: true },
	
}, 'Permissions', {
	//isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },//define nuevas tablas
});

// Provide access to Keystone
Producto.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Producto.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Producto.defaultColumns = 'nombre,description,price,descuento1,descuento2,descuento3,stock';
Producto.register();