<template>
    <div class="background">
        <div class="left">
            <div
                class="component"
                draggable
                v-for="(item,index) in components"
                :key="index"
                @dragstart="dragstart(item, $event)"
            >{{item.name}}</div>
        </div>
        <div class="center" @dragover.stop="checkDragOver($event)"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            components: [
                {
                    type: "Picture",
                    name: "图片"
                },
                {
                    type: "Video",
                    name: "视频"
                },
                {
                    type: "Carousel",
                    name: "轮播图"
                },
                {
                    type: "Carousel",
                    name: "轮播图12"
                }
            ],
            collapsed: false,
            dragComponent: null
        };
    },
    methods: {
        //拖拽开始
        dragstart(item, ev) {
            console.log(ev);
            //记录拖拽元素信息
            item.extra = {
                width: ev.currentTarget.offsetWidth,
                height: ev.currentTarget.offsetHeight,
                pointX: ev.offsetX,
                pointY: ev.offsetY
            };
            this.dragComponent = item;
            console.log(this.dragComponent);
            // this.$store.commit("resetActiveComponent");
            // //兼容firefox
            // ev.dataTransfer.setData("type", item.type);
            //用来指定拖动时被允许的效果
            ev.dataTransfer.effectAllowed = "copy";
        },
        //拖拽时计算被拖拽元素的位置
        checkDragOver(ev) {
            console.log(ev);
            ev.preventDefault();
            // let height = ev.currentTarget.offsetHeight;
            // let topDis = ev.offsetY - this.dragComponent.extra.pointY;
            // let bottomDis = height - topDis - this.dragComponent.extra.height;
            // let leftDis = ev.offsetX - this.dragComponent.extra.pointX;
            // //层叠子组件的dragover处理
            // if (child) {
            //     topDis = topDis + child.top;
            //     bottomDis = bottomDis + child.bottom;
            //     leftDis = leftDis + child.left;
            // }
            // if (topDis >= 0 && bottomDis >= 0) {
            //     //在当前组件内，非图片组件不能添加层级子组件
            //     if (component.type == "Picture") {
            //         this.relativeType = "child";
            //     }
            // } else {
            //     if (topDis < bottomDis) {
            //         //上边界超出
            //         this.relativeType = "pre";
            //     } else {
            //         //下边界超出
            //         this.relativeType = "next";
            //     }
            // }
            // this.relativeComponent = component;
            this.dragComponent.extra.top = 300; //topDis;
            this.dragComponent.extra.left = 400; //leftDis;
            // this.dragComponent.extra.bottom = bottomDis;
        }
    }
};
</script>
<style scoped>
.background {
    display: flex;
}

.left {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.component {
    width: 90px;
    height: 90px;
    text-align: center;
    background: #fff;
    margin-bottom: 10px;
    cursor: move;
}
.center {
    flex: 1;
    margin-left: 20px;
    background: #fff;
}
</style>
