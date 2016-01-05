#!/usr/bin/env node

"use strict";

let fs = require('fs');
let path = require('path');

function ls(arg){
	console.log(arg)
	fs.readdir(arg, function (err, filenames) {
  		if (err) throw err;
  		for(let f of filenames){
  			let filename=path.join(arg+'/', f)
  			fs.stat(filename, function (err, stats) {
  				if (err) throw err;
  				if(stats.isDirectory()){
  					if(process.argv[3] == '-R'){
  					ls(filename);
  				}
  				}else{
  					console.log(filename);
  				}
			});
  		}
	});
}

ls(process.argv[2]);

