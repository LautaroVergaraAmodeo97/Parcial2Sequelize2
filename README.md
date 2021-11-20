# Parcial2Sequelize2

Grupo 2: Tomás di Matteo, Augusto Castro, Lautaro Vergara Amodeo

Utilizamos cmd en vez de powershell porque este ultimo nos tiraba errores a la hora de la generación de modelos.

Generacion de modelos de clases por consola
---------------------------------------------------------------------
sequelize model:generate --name Rol --attributes nombre:string

sequelize model:generate --name Usario --attributes nombre:string,apellido:string,email:string,constraseñia:string,avatar:string,rolesId:integer

sequelize model:generate --name Direccion --attributes calle:string,numero:integer,codigopostal:string,usersId:integer

sequelize model:generate --name Imagenes --attributes nombre :string

sequelize model:generate --name DetallePedido --attributessubtotal:decimal,ordenPedidoId:integer,ProductoId:integer
