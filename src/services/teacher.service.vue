<script>
export default new (class teacherService {
  async getTeachers() {
    const result = await fetch(`http://localhost:5000/api/teachers`);

    return await result.json();
  }
})();
</script>
