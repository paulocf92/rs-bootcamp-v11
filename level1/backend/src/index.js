const express = require("express");

const app = express();

// Instruct express to understand JSON (middleware)
app.use(express.json());

/**
 * HTTP methods
 *
 * GET: Retrieve data from backend
 * POST: Create data in the backend
 * PUT: Update data in the backend
 * DELETE: Delete data from the backend
 */

/**
 * Parameter types
 *
 * Query params: Filters and pagination
 * Route params: Identify resources when updating/deleting a resource
 * Request body: Content used when creating/updating a resource (JSON)
 */

// Query params
app.get("/projects", (req, res) => {
  const { title, owner } = req.query;

  console.log({ title, owner });

  return res.json(["Project 1", "Project 2", "Project 3"]);
});

// Body params
app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  console.log({ title, owner });

  return res.json(["Project 1", "Project 2", "Project 3"]);
});

// Route params
app.put("/projects/:id", (req, res) => {
  const { id } = req.params;

  console.log({ id });

  return res.json(["Project 1", "Project 2", "Project 3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Project 2", "Project 3"]);
});

app.listen(3333, () => {
  console.log("Backend started!");
});
