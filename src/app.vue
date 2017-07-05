<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
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

        }
    };
</script>