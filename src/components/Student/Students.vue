<template>
  <div class="app-container">
    <Title :textTitle=" this.teacher.name ? `Teacher: ${this.teacher.name}` : `All Students`"/>
    <div v-show="this.teacher.name">
      <input
        type="text"
        class="input-name"
        placeholder="Student name"
        v-model="name"
        v-on:keyup.enter="addStudent"
      />
      <button type="submit" class="input-submit" v-on:click="addStudent">
        ADD
      </button>
    </div>
    <table class="students-table">
      <thead class="students-table-head">
        <th>Registration</th>
        <th class="students-table-col-name">Name</th>
        <th>Options</th>
      </thead>
      <tbody class="students-table-body" v-if="students.length">
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.id }}</td>
          <router-link tag="td" :to="`/studentDetail/${student.id}`" class="students-table-col-name col-link">
            {{ student.name }} {{ student.surname }}
          </router-link>
          <td>
            <button class="btn" @click="removeStudent(student)">Remove</button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else class="students-table-body">
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
import Title from "../_share/Title";
import studentService from "../../services/students.service.vue";

export default {
  components: {
    Title,
  },
  data() {
    return {
      title: "Student",
      teacherId: this.$route.params.teacher_id,
      name: "",
      students: [],
      teacher: {},
    };
  },
  async created() {
    if (this.teacherId) {
      try {
        this.students = await studentService.getStudentsByTeacherId(this.teacherId);
        this.teacher = this.students[0].teacher;
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        this.students = await studentService.getAllStudents();
      } catch (err) {
        console.log(err);
      }
    }
  },
  props: {},
  methods: {
    async addStudent() {
      if (!this.name) {
        return;
      }
      const _student = {
        name: this.name.split(" ")[0],
        surname: this.name.split(" ")[1],
        birth: "",
        teacherid: this.teacher.id,
      };

      try {
        const result = await studentService.saveStudent(_student);
        this.students.push(result);
        this.name = "";
      } catch (err) {
        console.log(err);
      }
    },
    async removeStudent(student) {
      try {
        const result = await studentService.deleteStudent(student);
        this.students.push(result);
        this.name = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-name {
  border: 1px solid #d8d8d8;
  margin: 0 5px 20px 0;
  padding: 8px;
  width: calc(100% - 85px);
}
.input-name:focus-visible {
  border-radius: 0;
}
.input-submit {
  background-color: #699cc5;
  border: none;
  color: #fff;
  font-weight: bold;
  height: 33px;
  width: 80px;
}
.students-table {
  text-align: center;
  width: 100%;
}
.students-table-head th {
  background-color: #d4d0d0;
  padding: 10px;
}
.students-table-body td {
  background-color: #e8e6e6;
  padding: 8px;
}
.students-table-col-name {
  width: 250px;
}
.btn {
  background: #d41212;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
}
.col-link {
  cursor: pointer;
}
</style>
