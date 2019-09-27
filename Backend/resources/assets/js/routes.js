import Home from './components/admin/Home.vue';
import Login from './components/auth/Login.vue';
import ReleaseNumberCreate from './components/admin/ReleaseNumberCreate.vue';
import ReleaseNumber from './components/admin/ReleaseNumber.vue';

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
		path: '/releasenumber',
		name:'releaseNumber',
		meta: {
			requiresAuth: true
		},
		component: ReleaseNumber
	},
	{
		path: '/releasenumber/create',
		name:'releaseNumberCreate',
		meta: {
			requiresAuth: true
		},
		component: ReleaseNumberCreate
	}

];