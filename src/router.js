const routers = [{
	path: '/',
	component: (resolve) => require(['./views/index.vue'], resolve),
	name:'index',
}, {
	path: '/index',
	component: (resolve) => require(['./views/index.vue'], resolve),
	name:'index',
	children:[
	{
		path: 'typeAdmin',
		name:'typeAdmin',
		meta:{
			title:'分类管理'
		},
		component: (resolve) => require(['./views/typeAdmin.vue'], resolve)
	}, {
		path: 'product',
		name:'product',
		meta:{
			title:'商品'
		},
		component: (resolve) => require(['./views/product.vue'], resolve)
	}]
}];
export default routers; 