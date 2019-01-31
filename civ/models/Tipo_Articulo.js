var keystone = require('keystone');
var Types = keystone.Field.Types;

var Tipo_Articulo = new keystone.List('Tipo_Articulo', {
 autokey: { path: 'slug', from: 'title', unique: true }
});



Tipo_Articulo.add({

	idTipo_Articulo: { type: Types.Textarea,initial:true, required: false, index: true },
  name:{ type: Types.Textarea, initial:true, index: true },



}, 'Permissions', {
	//isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },//define nuevas tablas
});

// Provide access to Keystone
Tipo_Articulo.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Tipo_Articulo.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Tipo_Articulo.defaultColumns = 'dpi,nombre,apellido,direccion,telefono,email';
Tipo_Articulo.register();
