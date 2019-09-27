import Home from './components/admin/Home.vue';
import Login from './components/auth/Login.vue';
import ReleaseNumberCreate from './components/admin/ReleaseNumberCreate.vue';

export const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/login',
		name:'login',
		component: Login
	},
	{
		path: '/releasenumber/create',
		name:'releaseNumberCreate',
		component: ReleaseNumberCreate
	}

];