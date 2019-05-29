import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建一个store仓库
export default new Vuex.Store({
	state:{	//每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。
		count:10,
		layoutType:true  //true是上下布局，false是左右布局
	},
	mutations:{ //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,必须是同步操作，//没有网络请求和其它异步操作可以直接用mutations
		increment(state){
			state.count++;
		},
		decrease(state){
			state.count--;
		},
		changgeLayoutType(state){
			state.layoutType = !state.layoutType;
		}
	},
	//Action 类似于 mutation，不同在于：
	//1 Action 提交的是 mutation，而不是直接变更状态。
	//2 Action 可以包含任意异步操作。
	actions:{  //有网络请求必须用actions，要异步嘛
		increment(context){ //可以设置名称和mutations对应的方法相同的名称
			context.commit("increment");
		},
		decrease(context){  //可以包含任意异步操作。
			setTimeout(()=>{
				context.commit('decrease');
			},1000);
			//context.commit('decrease');
		}
	},
	getters:{ //对state数据进行计算，Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
		getState(state){
			return state.count>0?state.count:0;
		}
	}
});