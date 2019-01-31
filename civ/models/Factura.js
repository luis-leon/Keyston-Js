var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Factura = new keystone.List('Factura');//crea nuevas tablas

var Factura = new keystone.List('Factura', {
 autokey: { path: 'slug', from: 'title', unique: true }
});



Factura.add({

	idFactura: { type: Types.Textarea,initial:true, required: false, index: true },
	idCliente:{type:Types.Relationship, ref: 'Cliente', index: true,initial:true, many:false},
	Fecha:{ type: Types.Date, initial:true, index: true },
	Subtotal:{ type: Types.Money ,initial: true, required: true, index: true },
	Total:{ type: Types.Money ,initial: true, required: true, index: true },
	Descuento:{ type: Types.Money ,initial: true, required: true, index: true },
	Usuario:{ type: Types.Relationship,ref:'User',many: false, required: false, index: true, initial:true },
  id_detalle:{type:Types.Relationship, ref:'DetalleFactura',many:true, requred: true, index:true, initial:true},


}, 'Permissions', {
	//isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },//define nuevas tablas
});

// Provide access to Keystone
Factura.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Factura.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Factura.defaultColumns = 'idFactura,idCliente,Fecha, Subtotal,Total, Descuento, Usuario, id_detalle';
Factura.register();
