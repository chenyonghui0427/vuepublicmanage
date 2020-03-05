<template>
    <div class="layout-container">
        <div class="header">
            <TopMenu />
        </div>
        <div class="layout-content">
            <LeftMenu />
            <div class="right-content">
                <BreadCrumb />
                <div class="main-content">
                    <div class="content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import LeftMenu from "@/components/LeftMenu/LeftMenu.vue";
import TopMenu from "@/components/TopMenu/TopMenu.vue";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
export default {
    components: {
        TopMenu,
        LeftMenu,
        BreadCrumb
    }
};
</script>
<style scoped>
.layout-container {
    display: flex;
    flex-flow: column;
    margin: 0;
    width: 100vw;
    height: 100vh;
}
.layout-content {
    display: flex;
    flex: 1;
}
.right-content {
    flex: 1;
    display: flex;
    flex-flow: column;
}
.main-content {
    flex: 1;
    position: relative;
    background: #f0f2f5;
}
.content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 20px 20px 20px;
}
.content::-webkit-scrollbar {
    display: none;
}
</style>
