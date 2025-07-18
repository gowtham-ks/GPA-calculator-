// Grade mapping
const gradeMapping = {
  'O': 4.0,
  'A+': 3.7,
  'A': 3.5,
  'B+': 3.0,
  'B': 2.7,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0
};

// Function to add a new course input
let courseCount = 0;

function addCourse() {
  courseCount++;
  const courseContainer = document.getElementById('course-container');

  const courseDiv = document.createElement('div');
  courseDiv.className = 'course';

  courseDiv.innerHTML = `
    <span class="course-number">Course ${courseCount}</span>
    <select class="course-grade">
      <option value="O">O</option>
      <option value="A+">A+</option>
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    </select>
    <input type="number" placeholder="Credits" class="course-credits" step="0.5" min="0">
    <button class="remove-btn" onclick="removeCourse(this)">❌ Remove</button>
  `;

  courseContainer.appendChild(courseDiv);
}

// Function to remove a course input
function removeCourse(button) {
  const courseDiv = button.parentElement;
  courseDiv.remove();
}

// Function to calculate CGPA
function calculateGPA() {
  const courses = document.querySelectorAll('.course');
  let totalCredits = 0;
  let weightedGradeSum = 0;

  courses.forEach(course => {
    const grade = course.querySelector('.course-grade').value;
    const credits = parseFloat(course.querySelector('.course-credits').value);

    if (gradeMapping[grade] !== undefined && !isNaN(credits)) {
      weightedGradeSum += gradeMapping[grade] * credits;
      totalCredits += credits;
    }
  });

  const cgpa = totalCredits > 0 ? (weightedGradeSum / totalCredits).toFixed(2) : '--';
  document.getElementById('result').textContent = `GPA: ${cgpa}`;
}