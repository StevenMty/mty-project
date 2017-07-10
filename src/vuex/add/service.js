const AV = require('./../../../static/js/av.js');

export default {
	queryMenus(cb){
		const query = new AV.Query('Menus');
		query.find().then(function(results) {
			cb(results);
		});
	},
	addMenus(data, cb){
		const Cates = AV.Object.extend('Menus');
	    const addcate = new Cates();
	    debugger;
	    addcate.save({
	    	name: data.name,
	    	iscate: data.iscate,
	    	state: data.state,
	    	op: data.op
	    }).then(function (object) {
	    	cb(object);
	  	});
	}
};