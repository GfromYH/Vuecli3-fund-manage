<template>
    <div class="home">
        <div class="container">
            <h1 class="title">GGBOM (ಡωಡ)</h1>
            <p class="lead">boom boom boom 各位看官请指教</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background: url(../assets/jinrong.jpg) no-repeat;
        background-size: 100% 100%;
    }
    .container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 100px;
        background-color: rgba(0, 0, 0, 0.7);
        text-align: center;
        color: white;
    }
    .title {
        font-size: 25px;
    }
    .lead {
        margin-top: 17px;
        font-size: 22px;
    }

</style>