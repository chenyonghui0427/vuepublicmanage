<template>
    <div class="menu-container" :style="collapsed?'width:80px':'width:250px'">
        <div class="menu-content">
            <a-menu
                :inlineCollapsed="collapsed"
                :defaultSelectedKeys="['1']"
                mode="inline"
                theme="dark"
            >
                <a-sub-menu v-for="(item,index) in navigate" :key="`sub${index}`">
                    <span slot="title">
                        <a-icon type="user" />
                        <span>{{item.title}}</span>
                    </span>
                    <a-menu-item
                        v-for="i in item.child"
                        :key="`${i.id}`"
                        @click="selectMenu(item,i)"
                    >{{i.title}}</a-menu-item>
                </a-sub-menu>
            </a-menu>
            <!-- <div class="collapse">
                <a-icon type="double-left" />
            </div>-->
        </div>
    </div>
</template>

<script>
import { handleBreadCrumb } from "../../util/index";
export default {
    name: "Home",
    data() {
        return {
            collapsed: false,
            navigate: [
                {
                    title: "菜单一",
                    url: "/urlOne",
                    icon: "area-chart",
                    child: [
                        { id: 1, title: "子菜单一", url: "/childUrlOne" },
                        { id: 2, title: "子菜单二", url: "/childUrlTwo" }
                    ]
                },
                {
                    title: "菜单二",
                    url: "/urlTwo",
                    icon: "area-chart",
                    child: [
                        { id: 3, title: "子菜单三", url: "/childUrlThree" },
                        { id: 4, title: "子菜单四", url: "/childUrlFour" }
                    ]
                }
            ]
        };
    },
    methods: {
        selectMenu(item, i) {
            let breadList = handleBreadCrumb(item, i);

            this.$store.commit("ADD_BREAD", breadList);
        }
    }
};
</script>
<style scoped>
.menu-container {
    position: relative;
    background: #fff;
    transition: 0.3s;
    border-right: 1px solid #ccc;
    background: #001529;
}
.menu-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}
.menu-container::-webkit-scrollbar {
    display: none;
}
.menu-content::-webkit-scrollbar {
    display: none;
}
.collapse {
    color: #ccc;
    background: #f2f2f2;
    cursor: pointer;
    text-align: center;
}
/*  */
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
    border-right: none;
}
</style>
