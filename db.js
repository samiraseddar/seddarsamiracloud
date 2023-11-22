const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  '', 'dpg-clf1fkc15k1s73f7d6bg-a', 
  'JjhxsIRBCwlArFhCYpnnPSCXHUYowN2q',           
  '',     
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
