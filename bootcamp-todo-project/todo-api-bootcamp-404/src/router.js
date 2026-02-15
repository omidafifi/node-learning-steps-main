
import { listTodos, getTodo, createTodo, updateTodo, patchTodo, deleteTodo } from './controllers/todos.js';

const todoIdRegex = /^\/todos\/([a-fA-F0-9]{24})$/;

export async function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = url;

  if (req.method === 'GET' && pathname === '/todos') {
    return listTodos(req, res, searchParams);
  }

  if (req.method === 'POST' && pathname === '/todos') {
    return createTodo(req, res);
  }

  const idMatch = pathname.match(todoIdRegex);
  if (idMatch) {
    const id = idMatch[1];
    if (req.method === 'GET') return getTodo(req, res, id);
    if (req.method === 'PUT') return updateTodo(req, res, id);
    if (req.method === 'PATCH') return patchTodo(req, res, id);
    if (req.method === 'DELETE') return deleteTodo(req, res, id);
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Not Found' }));
}
