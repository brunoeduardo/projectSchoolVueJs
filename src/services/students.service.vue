<script>
export default new (class studentService {
  async getStudentsByTeacherId(teacherId) {
    const result = await fetch(
      `http://localhost:5000/api/students/teacher/${teacherId}`
    );

    return await result.json();
  }

    async getStudentsById(studentId) {
    const result = await fetch(
      `http://localhost:5000/api/students/${studentId}`
    );

    return await result.json();
  }

  async getAllStudents() {
    const result = await fetch(`http://localhost:5000/api/students`);

    return await result.json();
  }

  async saveStudent(student) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };
    const response = await fetch(
      "http://localhost:5000/api/students",
      requestOptions
    );
    return await response.json();
  }

async updateStudent(student, editStudent) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editStudent),
    };
    const response = await fetch(
      `http://localhost:5000/api/students/${student}`,
      requestOptions
    );
    return await response.json();
  }

  async deleteStudent(student) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };
    const response = await fetch(
      `http://localhost:5000/api/students/${student.id}`,
      requestOptions
    );
    return await response.json();
  }
})();
</script>
