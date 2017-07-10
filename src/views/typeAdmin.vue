<template>
	<div class="mty-admin">
        <div class="mty-admin-top">
            <label>分类详情 :</label>
            <Button type="info" @click.stop="AddType('1')">新增分类</Button>
        </div>
        <Collapse v-model="value1">
            <Panel :name="data.value" v-for="(data, index) in datas">
                <label>{{data.label}}</label>
                <Button type="ghost" @click.stop="AddType('2', index)">新增</Button>
                <div slot="content">
                    <div class="mty-admin-content">
                        <div  v-for="b in data.children" class="mty-admin-content-i">
                            <img :src="b.url">
                            <label>{{b.label}}</label>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </Panel>
        </Collapse>
        <Modal
        v-model="show"
        title="新增"
        @on-ok="modify">
            <div class="modal-mty-add">
                <div class="modal-mty-add-i" v-show="checkAdd">
                    <label>分类图片</label>
                    <img :src="updateUrl">
                </div>
                <div class="modal-mty-add-i">
                    <label>分类名称</label>
                    <Input v-model="names" placeholder="请输入..." style="width: 160px"></Input>
                </div>
                <div class="modal-mty-add-i" v-show="!checkAdd">
                    <label>分类详情</label>
                    <img :src="updateUrla">
                    <Input v-model="namea" placeholder="分类名称" style="width: 80px;margin-top:35px;margin-left: 10px;"></Input>
                    <Button type="info" @click="addChild">添加分类</Button>
                </div>
                <div class="modal-mty-add-s" v-show="!checkAdd">
                    <label>分类展示</label>
                    <label v-if="this.childs.length<1">暂无数据</label>
                    <div v-for="data in childs" class="modal-mty-add-s-i">
                        <img :src="data.url">
                        <p>{{data.label}}</p>
                        <!-- <label>{{data.label}}</label>
                        <Input v-model="data.label" placeholder="分类名称" style="width: 80px;" readonly></Input> -->
                    </div>
                </div>
            </div>
        </Modal>
        <Modal v-model="confirm" width="360">
            <p slot="header" style=";text-align:center">
                <Icon type="information-circled"></Icon>
                <span>确认</span>
            </p>
            <div style="text-align:center">
                确认提交?
            </div>
            <div slot="footer">
                <Button type="info" size="large" long :loading="loading" @click="confirmAdd">确认修改?</Button>
            </div>
        </Modal>
	</div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    import './../static/css/admin.scss';
    import { addCate, queryCates } from './../service/index';
    export default {
        data(){
            return{
                datas:[
                    {
                        label:'热门',
                        value:'1',
                        children:[
                            { label:'自助餐', value:'1', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'西餐', value:'2', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'咖啡甜点', value:'3', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'日用家电', value:'4', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'果酿', value:'5', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'方便速食', value:'6', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                        ],
                    },
                    {
                        label:'本地生活',
                        value:'2',
                        children:[
                            { label:'自助餐', value:'1', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'西餐', value:'2', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'咖啡甜点', value:'3', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'日用家电', value:'4', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'果酿', value:'5', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'方便速食', value:'6', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'自助餐', value:'7', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'西餐', value:'8', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'咖啡甜点', value:'9', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'日用家电', value:'10', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'果酿', value:'11', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'方便速食', value:'12', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                        ],
                    },
                    {
                        label:'良品好物',
                        value:'3',
                        children:[
                            { label:'日用家电', value:'1', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'数码文具', value:'2', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'服侍起居', value:'3', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'水具酒具', value:'4', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'餐具厨具', value:'5', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'美容洗护', value:'6', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'鲜花绿植', value:'7', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                            { label:'香薰蜡烛', value:'8', url:'http://os73jwf97.bkt.clouddn.com/colora.png' },
                        ],
                    },
                    {
                        label:'好味食品',
                        value:'4',
                        children:[],
                    }
                ],
                value1:'1',
                addDatas:[],
                show: false,
                names:'',
                namea:'',
                updateUrl:'http://os73jwf97.bkt.clouddn.com/colore.png',
                updateUrla:'http://os73jwf97.bkt.clouddn.com/colore.png',
                checkAdd:false,
                childs:[],
                confirm:true,
                loading:false,
            }
        },
        watch:{
            show(){
                if(!this.show){
                    this.names = '';
                    this.childs = [];
                    this.checkAdd = false;
                }
            }
        },
        computed: mapGetters({
            products: 'menus'
        }),
        mounted(){
            // this.$store.dispatch('queryCates');
        },
        created () {
            this.$store.dispatch('queryMenus')
        },
        methods: {
            AddType(type, i){
                this.show = true;
                this.indexs = i;
                if (type === '1') {
                    this.checkAdd = false;
                }else{
                    this.checkAdd = true;
                }
                this.types = type;
            },
            modify(){
                if (this.types === '1') {
                    const data = {};
                    data.label = this.names;
                    data.value = String(parseInt(this.datas.length, 10) + 1);
                    data.children = this.childs;
                    this.datas.push(data);
                    this.confirm = true;
                }else{
                    const dataAdd = this.datas[this.indexs].children;
                    const data = {};
                    data.label = this.names;
                    data.value = String(parseInt(dataAdd.length, 10) + 1);
                    data.url = this.updateUrl;
                    dataAdd.push(data);
                }
            },
            addChild(){
                const data = {};
                data.url = this.updateUrla;
                data.label = this.namea;
                this.childs.push(data);
                this.namea = '';
            },
            confirmAdd(){
                const data = {};
                data.name = '111';
                this.$store.dispatch('addMenus', data);
            }
        }
    };
</script>