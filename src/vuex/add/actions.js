import * as types from './mutations_types';
import service from './service'

export default {
	// addCate: ({
	// 	commit
	// }) => {
	// 	commit(types.ADDCATE);
	// 	// return new Promise((resolve, reject) => {
	// 	// 	resolve()
	// 	// });
	// },

	// queryCates: ({
	// 	commit
	// }) => {
	// 	commit(types.QUERYCATES);
	// },
	queryMenus ({ commit }) {
		service.queryMenus(result => {
			commit(types.QUERY_MENU, { result })
		})
	},
	addMenus ({ commit }, data) {
		service.addMenus(data, result => {
			commit(types.ADD_MENU)
		})
	},
};