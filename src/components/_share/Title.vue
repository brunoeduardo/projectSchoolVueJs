<template>
    <div>
        <h1 class="title">{{ textTitle }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            textTitle: String
        }
    }
</script>

<style scoped>
    .title {
        margin-bottom: 25px;
    }
</style>