const Sequelize=require('sequelize')
const sequelize=require('../path/database')

const Product=sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:Sequelize.STRING,
    description:Sequelize.STRING,
    price:Sequelize.INTEGER,
    quantity:Sequelize.INTEGER,
})

module.exports=Product