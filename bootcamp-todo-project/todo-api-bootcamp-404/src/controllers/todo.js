// src/controllers/todos.js
export async function listTodos(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify([{ id: 1, title: 'sample todo' }]));
}

export async function getTodo(req, res, id) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, title: 'sample todo' }));
}

export async function createTodo(req, res) {
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id: 2, title: 'created' }));
}

export async function updateTodo(req, res, id) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, title: 'updated (PUT)' }));
}

export async function patchTodo(req, res, id) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, title: 'patched (PATCH)' }));
}

export async function deleteTodo(req, res, id) {
  res.writeHead(204);
  res.end();
}
