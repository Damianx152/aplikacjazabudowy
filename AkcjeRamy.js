var express = require('express');

var database = require('./db/bazamysql');

class AkcjeRamy{



    async pobierzRamy(req,res){
        var query = "SELECT * FROM ramy";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{	res.send(data);
		}



	});
        
    }

    
}
module.exports = new AkcjeRamy();