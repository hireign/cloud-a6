/**
 * Auth.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        
    id: { 
        type: 'number',  
        required : true,
        columnName: 'id'
    },
    name:{
        type: "string"
    },
    emailid:{
        type: "string"
    },
    password:{
        type: "string"
    } 
  },
    datastore: 'mysqldb',
    tableName: "auth"
};

