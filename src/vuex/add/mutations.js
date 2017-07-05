import * as types from './mutations_types'

export default {
	[types.ADDCATE](state, result) {
		state.addResult = result;
	},

	[types.QUERYCATES](state, result) {
		state.result = result;
	},
}