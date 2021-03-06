import React from 'react'
//import checkLogin from './utils/checkLogin/'
//this.props.params.id

// function redirectToDashboard(nextState, replace){
// 	if(!checkLogin.loggedIn()){
// 		replace({
// 			pathname: '/signin',
// 			state: { nextPathname: nextState.location.pathname }
// 		})
// 	}
// }

const Home = {
	path:'/home',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Home/').default)
		}, 'home')
	}
}

//赛事列表页
const HomeList = {
	path: '/home/list',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/HomeList/').default)
		},'event')
	}
}

//赛事-活动-培训 详情页
const HomeDetails = {
	path: '/home/details/:id',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/HomeDetails/').default)
		},'eventDetail')
	}
}

//级别选择
const HomeEnroll = {
	path: '/home/enroll/:id',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/HomeEnroll/').default)
		},'HomeEnroll')
	}
}

//推荐
const HomeRec = {
	path: '/home/recommend',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/HomeRec/').default)
		},'HomeRec')
	}
}

//订单详情
const OrdersInfo = {
	path: '/home/info/:id',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/HomeOrdersInfo/').default)
		},'ordersinfo')
	}
}

const Messages = {
	path:'/messages',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Messages/').default)
		}, 'messages')
	}
}

const User = {
	path:'/user',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/User/').default)
		}, 'user')
	}
}

//待支付
const UserToPay = {
	path:'/user/topay',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/UserToPay/').default)
		}, 'usertopay')
	}
}

//已报名
const UserPayed = {
	path:'/user/payed',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/UserPayed/').default)
		}, 'userpayed')
	}
}

const Signin = {
	path:'/signin',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/SignIn/').default)
		}, 'signin')
	}
}

const City = {
	path:'/city',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/City/').default)
		}, 'city')
	}
}

const Pay = {
	path:'/pay/:id',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Pay/').default)
		}, 'pay')
	}
}

const Wxcity = {
	path:'/wxcity',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Wxcity/').default)
		}, 'Wxcity')
	}
}

const Other = {
	path: '/',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Index/').default)
		}, 'index')
	}
}

const Page404 = {
	path: '*',
	getComponent: (nextState, cb) => {
		require.ensure([], (require) => {
			cb(null, require('./containers/Page404/').default)
		}, 'index')
	}
}


const routes = {
	component: require('./containers/App/').default,
	//onEnter: redirectToDashboard,
	childRoutes :[
		Home,
		HomeList,
		HomeDetails,
		HomeEnroll,
		HomeRec,
		OrdersInfo,
		Messages,
		User,
		UserToPay,
		UserPayed,
		Pay,
		Wxcity,
		Signin,
		City,
		Other,
		Page404
	]
};





export default routes;
