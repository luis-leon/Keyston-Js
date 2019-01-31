var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var DetalleFactura = new keystone.List('DetalleFactura');//crea nuevas tablas

var DetalleFactura = new keystone.List('DetalleFactura', {
 autokey: { path: 'slug', from: 'title', unique: true }
});



DetalleFactura.add({

	idDetalleFactura: { type: Types.Textarea,initial:true, required: false, index: true },
  CodigoArticulo:{type:Types.Relationship, ref: 'Producto', index: true,initial:true, many:false},
  Cantidad:{ type: Types.Number, initial:true, index: true },





}, 'Permissions', {
	//isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },//define nuevas tablas
});

// Provide access to Keystone
DetalleFactura.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */

DetalleFactura.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
/**
 * Registration
 */
DetalleFactura.defaultColumns = 'idDetalleFactura,idVenta,Cantidad';
DetalleFactura.register();
