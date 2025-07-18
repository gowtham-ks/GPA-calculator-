let courseCount = 0;

function addCourse() {
  const container = document.getElementById('course-container');
  const div = document.createElement('div');
  div.className = 'course';
  div.innerHTML = `
    <input type="text" placeholder="Course Name" required>
    <input type="number" placeholder="Credits" min="1" required>
    <select>
      <option value="A">A</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="B-">B-</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
  `;
  container.appendChild(div);
}

function gradeToPoints(grade) {
  const scale = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0
  };
  return scale[grade] || 0;
}

function calculateGPA() {
  const courses = document.querySelectorAll('.course');
  let totalCredits = 0;
  let totalPoints = 0;

  courses.forEach(course => {
    const credits = parseFloat(course.children[1].value);
    const grade = course.children[2].value;

    if (!isNaN(credits)) {
      totalCredits += credits;
      totalPoints += credits * gradeToPoints(grade);
    }
  });

  const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : '--';
  document.getElementById('result').textContent = `GPA: ${gpa}`;
}
