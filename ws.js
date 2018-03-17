const express = require('express');

const app = express();

app.get('/', (req,res)=>{
	return res.sendFile(__dirname + '/index.html');
})

app.get('/caculate', (req,res) =>{
	var {lat1,lon1,lat2,lon2} = req.query;
	
	var R = 6371; // Radius of the earth in km
	var dLat = (lat2-lat1) * Math.PI/180;  // deg2rad below
	var dLon = (lon2-lon1) * Math.PI/180; 
	var a = 
	  Math.sin(dLat/2) * Math.sin(dLat/2) +
	  Math.cos((lat1)*Math.PI/180) * Math.cos((lat2)*Math.PI/180) * 
	  Math.sin(dLon/2) * Math.sin(dLon/2)
	  ; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	res.send({
		code: 0,
		message: 'Distance in km',
		data: d
	})
})

app.listen(3000);
