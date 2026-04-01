import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { createRoot } from 'react-dom/client'
import './App.css'

// The Object
        const students = [
            {suid: 123456, name: 'Sue Flay', year: 'Senior', major: 'Applied Data Analytics'},
            {suid: 234567, name: 'Ella Vader', year: 'Junior', major: 'Information Management and Technology'},
            {suid: 345678, name: 'Chris P Bacon', year: 'Junior', major: 'Innovation, Society and Technology'}
        ];

// Question 5: Students Function with Content (only Sue this time)
function Students () {
  const filteredStudents = students.filter(student => student.name === 'Sue Flay');
  return (
    <div>
      <ul>
        {filteredStudents.map(function(student) {
          return (
            <div key={student.suid}>
              <li>Name: {student.name}</li>
              <p>Year: {student.year}</p>
              <p>Major: {student.major}</p>
            </div>
          );
        })}
      </ul>
    </div>
  )
}

// Button Function with Content  
function Slice() {
  const shoot = () => {
    alert("Welcome to MySlice!");
  }
  return (
    <button onClick={shoot}>Activate</button>
  );
}

// Map Function
function App() {
  return (
    <div>
      <h1>Students</h1>
      <Students />
      <Slice /> 
    </div>
  );
}

// Render -- Question: Why is this necessary?
createRoot(document.getElementById('root')).render(
  <App />
);

export default App





