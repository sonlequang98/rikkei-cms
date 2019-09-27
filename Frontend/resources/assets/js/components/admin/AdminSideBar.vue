<template>
    <div>
        <h6>&nbsp;&nbsp;メニュー一覧</h6>
        <ul>
            <li v-if="checkRole.release_number"><router-link :to="{ name: '', params: {}}">発売号一覧管理</router-link></li>
            <li v-if="checkRole.user_admin"><router-link :to="{ name: '', params: {}}">アドミンユーザー管理</router-link></li>
            <li v-if="checkRole.category"><router-link :to="{ name: '', params: {}}">カテゴリ管理</router-link></li>
            <li><router-link :to="{ name: '', params: {}}">記事一覧管理</router-link></li>
            <li><router-link :to="{ name: '', params: {}}">画像管理</router-link></li>
            <li v-if="checkRole.member"><router-link :to="{ name: '', params: {}}">メンバー一覧管理</router-link></li>
            <li v-if="checkRole.setting"><router-link :to="{ name: '', params: {}}">設定管理</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: 'admin-side-bar',
        data(){
           return {
            checkRole:{
                release_number: true,
                user_admin: true,
                category: true,
                member: true,
                setting: true
                },
            }
        },
        mounted(){
            if(this.$store.state.currentUser.role_id===2)
            {
                this.checkRole.release_number = this.checkRole.user_admin = this.checkRole.category = this.checkRole.member = this.checkRole.setting =  false;
            }
            if(this.$store.state.currentUser.role_id===3)
            {
                this.checkRole.user_admin = this.checkRole.member = this.checkRole.setting = false;
            }
        }
    };
</script>
<style scoped>
    body{
        padding-top: 15px;
        width: 20%;
        float: right;
    }
    a{
        color: grey;
    }
    a:hover{
        text-decoration: none;
    }
    
    #arrow {
        border-right:2px solid black;
        border-bottom:2px solid black;
        width:10px;
        height:10px;
        transform: rotate(-45deg);
        margin-top:40px;
    }
    ul li {
        color: grey;
        font-weight: bolder;
        position: relative;
        padding-bottom: 10px;
    }

    ul {
        list-style: none;
    }

    ul li:before{
       content: '';
       position: absolute;
       border-right:2px solid black;
       border-bottom:2px solid black;
       width:10px;
       height:10px;
       top: calc(50% - 4px);
       left: -20px;
       transform: translateY(-50%) rotate(-45deg);
    }
</style>