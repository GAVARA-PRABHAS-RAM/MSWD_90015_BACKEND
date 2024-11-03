const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

const students = [
  { name: 'Ram', id: '6233', branch: 'CSE', year: 2 },  // Fixed syntax error here
  { name: 'Prabhas', id: '2222', branch: 'CSE', year: 2 },
  { name: 'Prabhas Ram', id: '7282', branch: 'CSE', year: 2 },
  { name: 'xyz', id: '1111', branch: 'CSE', year: 2 },
  { name: 'zzy', id: '2222', branch: 'CSE', year: 2 }
];

const faculty = [
  { name: 'Nithya', id: '1224', dept: 'CSE-H', designation: 'Professor' },
  { name: 'Dr. bhAAi', id: '3000', dept: 'IOT', designation: 'Professor' },
  { name: 'Dr. HC', id: '9696', dept: 'psychology', designation: 'Professor' }
];

const courses = [
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' }
];

const feedback = [
  { id: 1, student: 'Monika', message: 'Good' },
  { id: 2, student: 'Hc', message: 'Average' }
];

app.get('/', (req, res) => {
  res.send('Welcome to K L World!');  // Changed back to your initial message
});

app.get('/student', (req, res) => {
  res.json(students);
});

app.get('/faculty', (req, res) => {
  res.json(faculty);
});

app.get('/courses-ltps', (req, res) => {
  res.json(courses);
});

app.get('/feedback', (req, res) => {
  res.json(feedback);
});

app.get('/MSH', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'MSH.pdf');  
  res.sendFile(filePath);
});

app.get('/bhAAyam', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'bhAAyam.jpg'); 
  res.sendFile(filePath);
});
app.get('/nidra', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'nidra.mp4'); 
  res.sendFile(filePath);
});

app.get('*', (req, res) => {
  res.send('Route not found.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  
});
