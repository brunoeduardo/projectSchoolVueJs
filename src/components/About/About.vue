<template>
    <div class="app-container">
        <Title textTitle="About"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, cumque error fugiat molestias iure repellat minus dolorum. Enim nemo, id consectetur expedita quam eaque incidunt harum laudantium quas omnis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, cumque error fugiat molestias iure repellat minus dolorum. Enim nemo, id consectetur expedita quam eaque incidunt harum laudantium quas omnis?</p>
    </div>
</template>

<script>
    import Title from '../_share/Title'

    export default {
        components: {
            Title
        }   
    }
</script>

<style scoped>
   .about-container {
       text-align: justify;
   }
</style>