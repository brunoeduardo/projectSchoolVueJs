<template>
  <div class="app-container">
    <Title
      :textTitle="`Student: ${this.studentName}`"
    />
    <div class="edit-container">
      <button
        v-if="!isEditing"
        type="button"
        class="button"
        v-on:click="editForm()"
      >
        Edit
      </button>
      <button
        v-if="isEditing"
        type="button"
        class="button button-save"
        v-on:click="saveForm()"
      >
        Save
      </button>
      <button
        v-if="isEditing"
        type="button"
        class="button button-cancel"
        v-on:click="cancelForm()"
      >
        Cancel
      </button>
    </div>
    <form>
      <label class="input-label" for="studentRegistration">Registration</label>
      <input
        type="text"
        class="input-field"
        placeholder="Registration"
        id="studentRegistration"
        v-model="student.id"
        disabled
      />

      <label class="input-label" for="name">Name</label>
      <input
        type="text"
        class="input-field"
        placeholder="Student name"
        id="studentName"
        v-model="student.name"
        :disabled="editField"
      />
      <label class="input-label" for="surname">Surname</label>
      <input
        type="text"
        class="input-field"
        placeholder="Student surname"
        id="studentSurname"
        v-model="student.surname"
        :disabled="editField"
      />

      <label class="input-label" for="studentBirth">Birth</label>
      <input
        type="text"
        class="input-field"
        placeholder="Student birth"
        id="studentBirth"
        v-model="student.birth"
        :disabled="editField"
      />

      <label class="input-label" for="studentTeacher">Teacher</label>
      <select
        class="input-field"
        v-model="student.teacher"
        :disabled="editField"
      >
        <option
          v-for="(teacher, index) in teachers"
          :key="index"
          v-bind:value="teacher"
        >
          {{ teacher.name }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
import Title from "../_share/Title";
import lodash from "lodash";

export default {
  components: {
    Title,
  },
  data() {
    return {
      teachers: [],
      student: {},
      studentCopy: {},
      studentName: '',
      studentId: this.$route.params.id,
      editField: true,
      isEditing: false,
    };
  },
  methods: {
    editForm() {
      this.isEditing = true;
      this.editField = false;
      this.studentCopy = lodash.cloneDeep(this.student);
    },
    saveForm() {
      let editStudent = {
        id: this.student.id,
        name: this.student.name,
        surname: this.student.surname,
        birth: this.student.birth,
        teacher: this.student.teacher,
      };

      this.$http
        .put(`http://localhost:3000/students/${this.studentId}`, editStudent)
        .catch((err) => {
          console.log("Error => ", err);
        });

        this.isEditing = false;
        this.editField = true;
        this.studentName = `${this.student.name} ${this.student.surname}`
    },
    cancelForm() {
      this.isEditing = false;
      this.editField = true;
      this.student = lodash.cloneDeep(this.studentCopy);
    },
  },
  created() {
    this.$http
      .get(`http://localhost:3000/students/${this.studentId}`)
      .then((result) => result.json())
      .then((student) => {
          this.student = student;
          this.studentName = `${this.student.name} ${this.student.surname}`
      })
      .catch((err) => {
        console.log("Error => ", err);
      });

    this.$http
      .get("http://localhost:3000/teachers")
      .then((result) => result.json())
      .then((teachers) => (this.teachers = teachers))
      .catch((err) => {
        console.log("Error => ", err);
      });
  },
};
</script>

<style scoped>
.input-field {
  border: 1px solid #d8d8d8;
  margin: 0 5px 20px 0;
  padding: 8px;
  width: 100%;
}
.input-field:focus-visible {
  border-radius: 0;
}
.input-label {
  display: block;
  margin-bottom: 2px;
  margin-top: 8px;
}
.edit-container {
  display: flex;
  justify-content: end;
}
.button {
  background-color: #699cc5;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  height: 33px;
  margin: 5px;
  width: 80px;
}

.button-cancel {
  background: #c14c4c;
}

.button-save {
  background: #45a749;
}
</style>
