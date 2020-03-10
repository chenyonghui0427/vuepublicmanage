<template>
    <div class="background">
        <div class="login_container">
            <div class="add_count" ref="add" @click="add"></div>
            <div class="form_item">
                <div ref="username_label" class="label" @click="clickFocusUsername">用户名</div>
                <input
                    ref="username"
                    class="username_input"
                    @focus="foucsUsername"
                    @blur="blurUsername"
                />
                <div ref="username_line" class="line"></div>
            </div>
            <div class="form_item">
                <div ref="password_label" class="label" @click="clickFocusPassword">密码</div>
                <input
                    ref="password"
                    class="password_input"
                    @focus="foucsPassword"
                    @blur="blurPassword"
                />
                <div ref="password_line" class="line"></div>
            </div>
            <div class="submit"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapsed: false
        };
    },
    methods: {
        foucsUsername() {
            this.$refs.username_label.style.lineHeight = "18px";
            this.$refs.username_label.style.fontSize = "18px";
            this.$refs.username_line.style.width = "100%";
        },
        blurUsername() {
            this.$refs.username_label.style.lineHeight = "60px";
            this.$refs.username_label.style.fontSize = "24px";
            this.$refs.username_line.style.width = "0";
        },
        foucsPassword() {
            this.$refs.password_label.style.fontSize = "18px";
            this.$refs.password_label.style.lineHeight = "18px";
            this.$refs.password_line.style.width = "100%";
        },

        blurPassword() {
            this.$refs.password_label.style.fontSize = "24px";
            this.$refs.password_label.style.lineHeight = "60px";
            this.$refs.password_line.style.width = "0";
        },
        clickFocusUsername() {
            this.$refs.username.focus();
        },
        clickFocusPassword() {
            this.$refs.password.focus();
        },
        add() {
            console.log(this.$refs.add.style);
            this.$refs.add.style.top = "50%";
            // this.$refs.add.style.bottom = "50%";
            this.$refs.add.style.right = "130px";
            // this.$refs.add.style.top="50%"
        }
    }
};
</script>
<style scoped>
/* For demo */
.background {
    width: 100vw;
    height: 100vh;
    background: #fff;
    border-radius: 10px;
    background-image: url("../../assets/images/sign_bg.png");
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.login_container {
    width: 400px;
    border-radius: 10px;
    /* padding: 24px; */
    padding: 60px 50px 40px 50px;
    background: #fff;
    position: relative;
}
.add_count {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: -70px;
    background: red;
    transition: 0.5s;
}
.form_item {
    width: 100%;
    position: relative;
    margin-top: 30px;
}
.form_item::before {
    width: 100%;
    content: "";
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.5s;
}
.line {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 0;
    background: red;
    /* border: 1px red solid; */
    transition: 0.5s;
}
.label {
    position: absolute;
    left: 0;
    line-height: 60px;
    font-size: 24px;
    font-weight: 300;
    transition: 0.2s;
    z-index: 2;
}
.username_input,
.password_input {
    height: 60px;
    border: none;
    transition: 0.2s;
    z-index: 99;
}
input {
    border: 0;
    outline: none;
    z-index: 99;
}
</style>
