<template>
    <div class="bread-crumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item,index) in bread" :key="index">{{item.title}}</a-breadcrumb-item>
            <!-- <a-breadcrumb-item>
                <a href>Application Center</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <a href>Application List</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>-->
        </a-breadcrumb>
        <!-- <span v-for="(item,index) in bread" :key="index">{{item.title}}</span> -->
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
}
</style>