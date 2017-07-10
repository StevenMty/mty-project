<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    var config = require('./../config')
    const AV = require('./../static/js/av.js');
    export default {
        data() {
            return {

            };
        },
        ready(){
            this.$AVInit();
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        },
        created(){
            AV.init({appId:config.av.appId, appKey:config.av.appKey})
        }
    };
</script>