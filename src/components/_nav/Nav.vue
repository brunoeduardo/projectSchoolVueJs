<template>
    <div>
        <header class="header-container">
            <nav class="nav-container">
                <router-link to="/teachers">Teachers</router-link>
                <router-link to="/allstudents">Students</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .header-container {
        background: #d4d0d0;
        margin-bottom: 5px;
        padding: 10px;
        text-align: center;
        width: 100%;
    }
    .nav-container a {
        color: #000;
        margin: 0 10px;
        padding: 5px;
        text-decoration: none;
    }
    .nav-container .router-link-active {
        color: #203190;
        font-weight: bold;
    }

</style>