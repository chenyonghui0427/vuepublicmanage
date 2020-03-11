<template>
    <div class="aa">
        <div>122112</div>
        <div style="
    display: -webkit-box;">
            <a-carousel :afterChange="onChange">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </a-carousel>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onChange(a, b, c) {
            console.log(a, b, c);
        }
    }
};
</script>
<style scoped>
.aa {
    display: -webkit-box;
    display: flex;
}
/* For demo */
.ant-carousel >>> .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}
</style>
