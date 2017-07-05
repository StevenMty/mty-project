<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <div class="index-mty-top">
            <div class="index-mty-top-left">
                <p>tianYuuu</p>
                <label>我在这喧嚣里把你寻找</label>
            </div>
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <Menu-item :name="child.value" v-for="(child, index) in menu" @click.native="changeMenu(index, child.url)">{{child.label}}</Menu-item>
            </Menu>
        </div>
        <div class="index-mty-content">
            <div class="index-mty-content-left">
                <Menu mode="vertical" :theme="theme1" active-name="1">
                    <Menu-item :name="child.value" v-for="(child, index) in menu[0].children" @click.native="goUrl(index, child.url)">{{child.label}}</Menu-item>
                </Menu>
            </div>
            <div class="index-mty-content-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import './../static/css/index.scss';

    export default {
        data(){
            return{
                theme1:'dark',
                menu: [
                    {
                        label:'分类管理',
                        value:'1',
                        url:'typeAdmin',
                        children:[
                            { label:'分类管理', value:'1', url:'/index/typeAdmin' },
                            { label:'商品管理', value:'2', url:'/index/product' },
                        ]
                    }
                ],
                
            }
        },
        mounted(){
            
        },
        methods: {
            changeMenu(i, url){

            },
            goUrl(i, url){
                this.$router.push(url);
            }
            // handleStart() {
            //     this.$Modal.info({
            //         title: 'Bravo',
            //         content: 'Now, enjoy the convenience of iView.'
            //     });
            // }
        }
    };
</script>