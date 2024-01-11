// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/download-resume', (req, res) => {
  const resumeFilePath = path.join(__dirname, 'public', 'pavankumar_T_resume.pdf');

  // Set the appropriate headers for file download
  res.setHeader('Content-Disposition', 'attachment; filename= pavankumar_T_resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  // Send the file
  res.sendFile(resumeFilePath);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

