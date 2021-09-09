<template>
  <div class="app-container">
    <Title textTitle="Teachers"/>
    <table class="teachers-table">
      <thead class="teachers-table-head">
        <th>Registration</th>
        <th class="teachers-table-col-name">Name</th>
        <th>Students</th>
      </thead>
      <tbody class="teachers-table-body" v-if="teachers.length">
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{teacher.id}}</td>
          <td class="teachers-table-col-name">{{teacher.name}} {{teacher.surname}}</td>
          <td>

          </td>
        </tr>
      </tbody>
      <tfoot v-else class="teachers-table-body">
        <tr>
          <td colspan="3">
            Nothing here
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Title from '../_share/Title';

export default {
  components: {
    Title
  },
  data() {
    return {
      name: '',
      teachers: []
    }
  },
  created(){
    this.$http.get('http://localhost:3000/teachers')
    .then(result => result.json())
    .then(teachers => this.teachers = teachers)
    .catch((err) => {
      console.log('Error => ', err)
    });
  },
  props: {

  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .teachers-table {
    text-align: center;
    width: 100%;
  }
  .teachers-table-head th {
    background-color: #d4d0d0;
    padding: 10px;
  }
  .teachers-table-body td{
    background-color: #e8e6e6;
    padding: 8px;
  }
  .teachers-table-col-name {
    width: 250px;
  }
  .btn {
    background: #d41212;
    border: none;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;

  }
</style>
