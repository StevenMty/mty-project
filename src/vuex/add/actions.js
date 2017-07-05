import * as types from './mutations_types';

export default {
	addCate: ({
		commit
	}) => {
		commit(types.ADDCATE);
		// return new Promise((resolve, reject) => {
		// 	resolve()
		// });
	},

	queryCates: ({
		commit
	}) => {
		commit(types.QUERYCATES);
		// return new Promise((resolve, reject) => {
		// 	resolve()
		// });
	},
};