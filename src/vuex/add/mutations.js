import * as types from './mutations_types'

export default {
	[types.QUERY_MENU](state, result) {
		state.result = result;
	},
	// 添加
	[types.ADD_MENU](state) {
		state.addResult = 'success';
	},
}