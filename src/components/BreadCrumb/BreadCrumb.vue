<template>
    <div class="bread-crumb">
        <el-tag
            class="bread-item"
            v-for="(item,index) in bread"
            :key="index"
            closable
        >{{item.title}}</el-tag>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        //映射组件的状态
        ...mapState({
            bread: state => state.bread
        })
    },
    created() {
        console.log(this.$store.state.bread);
    },
    methods: {}
};
</script>
<style scoped>
.bread-crumb {
    background: #f0f2f5;
    padding: 10px 20px;
    overflow: scroll;
    height: 70px;
}
.bread-item {
    margin-right: 5px;
}
</style>