const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded tasks array
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build Express API", completed: false },
  { id: 3, title: "Test with Postman", completed: true }
];

// GET /api/health - returns server status
app.get('/api/health', (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// GET /api/tasks - returns hardcoded tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log(`Tasks: http://localhost:${PORT}/api/tasks`);
});