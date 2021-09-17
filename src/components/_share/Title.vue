<template>
    <div>
        <div class="btn-back" @click="backNav()">voltar</div>
        <h1 class="title">{{ textTitle }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            textTitle: String
        },
        methods: {
            backNav() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .title {
        margin-bottom: 25px;
    }
    .btn-back {
        cursor: pointer;
        margin-bottom: 12px;
    }
    .btn-back:before {
        content: '< ';
        font-size: 14px;
    }
</style>