<template>
	<div>
		<div id="header">
			<admin-header></admin-header>
		</div>
		<div id="body">
			<div id="menu">
				<admin-side-bar></admin-side-bar>
			</div>
			<div id="main">
				<div id="main-header">
					<h4>新規発売号登録</h4>
				</div>
				<div id="form-add-new">
					<form action="" method="post" @submit.prevent="save">
						<label for="">発売号名</label><br>
						<datepicker @closed="selectedDP" v-model="name" :format="'yyyy年MM月dd日号'" :input-class={datepicker}></datepicker>
						<label for="">発売号画像</label><br>
						<vue-dropzone v-model="image_upload" id="dropzone" @vdropzone-file-added="addFile" :options="dropzoneOptions" @vdropzone-success="vdropzoneSuccess" @vdropzone-error="vdropzoneError" ></vue-dropzone>
						<div class="error" v-if="imgErrors">
				    		<p class="text-center" style="color:red;" v-for="error in imgErrors">
				                {{ error }}
				            </p>           
			        	</div>
			        	<label for="">形容</label>
			        	<textarea name="" placeholder="形容の入力" v-model="release_number.release_number_description"></textarea>
			        	<div class="error" v-if="errors">
				    		<p class="text-center" style="color:red;" v-for="error in errors">
				                {{ error }}
				            </p>           
			        	</div>
			        	<button type="submit"  id="btnSave">保存</button>
			        	<button type="" id="btnCancel">キャンセル</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AdminHeader from './AdminHeader.vue'; 
	import AdminSideBar from './AdminSideBar.vue'; 
	import Datepicker from 'vuejs-datepicker';
	import vue2Dropzone from 'vue2-dropzone';
	import 'vue2-dropzone/dist/vue2Dropzone.min.css';
	 
	let today = new Date();
	let dd =  today.getDate() - today.getDay()+5;
	let mm = String(today.getMonth()).padStart(2, '0');
	let yyyy = today.getFullYear();
	export default{
		name: 'ReleaseNumberCreate',
		mounted(){
			this.name = new Date(yyyy,mm,dd);
			this.release_number.release_number_name = yyyy + "年"+mm+"月"+dd+"日号";
		},	
		components:{
			AdminHeader,
			AdminSideBar,
			Datepicker,
			vueDropzone: vue2Dropzone
		},
		data(){
			return {
					release_number:{
						release_number_name:null,
						image: null,
						release_number_description:null
					},
					image_upload:'',
					name: '',
					year:'',
					month:'',
					day:'',
					datepicker:{
						width: '100%',
						margin: '10px , 0'
					},
					dropzoneOptions: {
			          	url: "http://adminsite.local/api/images",
			          	thumbnailWidth: 150,
			          	maxFilesize: 10,
			          	maxFilesize: 0.5,
			          	addRemoveLinks: true,
			          	dictDefaultMessage: "<img src='https://img.icons8.com/ios/50/000000/upload-to-cloud.png'><br>ここに画像ドラッグ",
			     	},
			     	imgErrors:[],
			     	errors:[]
				}
			},
		methods:{
			//format release number name
			selectedDP(){
				this.year = this.name.getFullYear();
				this.month = String(this.name.getMonth()).padStart(2, '0');
				this.day = this.name.getDate() - this.name.getDay()+5;
				this.name = new Date(this.year,this.month,this.day);
				this.release_number.release_number_name = this.year + "年"+this.month+"月"+this.day+"日号";
			},
			//remove error
			addFile(){
				this.imgErrors=[];
			},
			//get image id 
			vdropzoneSuccess(file,response){
				this.imgErrors=[];
				this.release_number.image = response.data;
			},
			//show error
			vdropzoneError(file,message,xhr){
				this.imgErrors=[];
				this.imgErrors.push(message.errors.file);
			},
			save(){
				console.log(this.release_number);
				axios.post('http://adminsite.local/api/release_numbers',this.release_number)
				.then((res) => {
					
				})
				.catch((err) => {
					console.log(err.errors);
					})
				
				}
			}
	};
</script>

<style scoped>
	body{
		font-family: Sans-serif;
		size: 20px;
		width: 100%;
		font-size: 20px;
	}
	#body{
		width: 100%;
	}
	#header{
		width: 100%;
	}
	#menu{
		padding-top: 10px;
		width: 15%;
		float: left;
	}

	#main{
		padding-top: 35px;
		width: 85%;
		float: right;
		border-left: 1px solid black;
	}
	#main-header{
		margin-left: 20px;
	}

	#form-add-new{
		margin-left: 35px;
		margin-right: 100px;
	}
	h4{
		font-weight: bold;
		margin-bottom: 30px;
		font-size: 20px;	
	}
	#form-add-new .input{
		width: 100%;
		text-indent: 10px;
		margin: 10px 0;
	}
	#form-add-new label{
		font-size: 20px;
		margin: 10px 0;
	}

	#form-add-new textarea{
		width: 100%;
		height: 100px;
		text-indent: 10px;
	}

	#form-add-new button{
		margin-top: 30px;
		margin-right: 30px;
	}

	#form-add-new #btnSave{
		width: 70px;
		background-color: #deebf7;
	}

	#form-add-new #btnCancel{
		width: 150px;
		background-color: #fff2cc;
	}


	.datepicker{
		width: 700px;
		margin: 10px 0;
	}
	
	
</style>
<style module>
	.datepicker{
		width: 100%;
		text-indent: 10px;
	}
</style>
