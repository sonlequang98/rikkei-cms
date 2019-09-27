<template>
	<div>
		<admin-header></admin-header>
		<div id="body">
			<div id="menu">
				<admin-side-bar></admin-side-bar>
			</div>
			<div id="main">
				<div id="header">
					<h5>新規発売号登録</h5>
				</div>
				<div id="form-add-new">
					<form action="">
						<label for="">発売号名</label><br>
						<input class="input" type="text" @change="inputName" v-model="release_number_name"><br>
						<label for="">発売号画像</label><br>
						
					</form>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import AdminHeader from './AdminHeader.vue'; 
	import AdminSideBar from './AdminSideBar.vue'; 
	let today = new Date();
	let dd =  today.getDate() - today.getDay()+5;
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	export default{
		name: 'ReleaseNumberCreate',
		mounted(){
			this.release_number_name =yyyy+'年'+mm+'月'+dd+'日'+'号';
		},	
		components: {
			AdminHeader,
			AdminSideBar
		},
		data(){
			return {
				release_number_name: '',
				year:'',
				month:'',
				day:''
			}
		},
		methods:{
			inputName(){

				console.log(this.release_number_name);
			}
		}
	};
</script>

<style scoped>
	body{
		width: 100%;
	}
	#body{
		width: 100%;
	}
	#menu{
		padding-top: 10px;
		width: 18%;
		border-right: 1px solid black;
		float: left;
	}
	#main{
		width: 82%;
		float: right;
		padding: 30px 80px;
	}

	h5{
		font-weight: bold;
		margin-bottom: 30px;
	}
	#form-add-new .input{
		width: 100%;
	}
	#form-add-new #input-file{
		width: 100%;
	}
	
	
</style>
