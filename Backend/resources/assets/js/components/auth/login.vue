<template>
	<div id="form-login">
		<h1 class="text-center">総合ジャーナル</h1>
		<div class="error">
            <p class="text-center" style="color:red;">
                {{ authError }}
            </p>
        </div>
        <div class="error" v-if="errors">
    		<p class="text-center" style="color:red;" v-for="error in errors">
                {{ error }}
            </p>           
        </div>
			<div class="card-body">
				<form @submit.prevent="authenticate">
						<div class="form-group row">
							<input type="text" v-model="form.email" placeholder="メールの入力" class="form-control form-input">
						</div>

						<div class="form-group row">
							<input type="password" v-model="form.password" placeholder="パスワードの入力" class="form-control form-input">
						</div>
						<div class="form-group row">
							<button class="btn-login">ログイン</button>
						</div>

						
				</form>
		</div>
	</div>
	
</template>

<script>
	import {login} from '../../helpers/auth';
	export default{
		name: 'login',
		data(){
			return {
				form: {
					email: '',
					password: ''
				},
				errors:[],
			}
		},
		methods:{
			authenticate() {
				this.errors= [];
				if(this.form.email.length<=64&&this.form.email.length<=64&&this.form.password.length<=72&&this.form.password.length)
               	{
               	 this.$store.dispatch('login');
                	login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/'});
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});

                    });
               	}
               	if(this.form.email.length===0)             
               		this.errors.push('メールを入力してください。');
               	else if(this.form.email.length>64)             
               		this.errors.push('メールは6文字から６４文字まで入力してください。');
               	if(this.form.password.length===0)
					this.errors.push('パスワードを入力してください。');
               	else if(this.form.password.length>72)
               		this.errors.push('パスワードは6文字から７２文字まで入力してください。');
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
	};
	
</script>
<style >
	#form-login{
		width: 65%;
		margin: 0 auto;
		margin-top: 70px;
		padding: 70px;
		border: 2px solid #227447;

	}
	.form-input{
		margin: 0 auto;
		width: 70%;
	}
	.btn-login{
		margin-left: 40%;
		width: 120px;
		color: #ffffff;
		border: 1px solid black;
		height: 43px;
		background-color: #5b9bd5;
	}
</style>