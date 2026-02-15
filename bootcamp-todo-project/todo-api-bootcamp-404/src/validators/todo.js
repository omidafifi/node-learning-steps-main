
export function validateNewTodo(input) {
  const errors = [];
  if (!input || typeof input !== 'object') errors.push('Body must be JSON object');
  const title = input?.title?.toString().trim();
  if (!title) errors.push('title is required');
  const description = input?.description?.toString().trim() || '';
  let completed = Boolean(input?.completed);
  if (typeof input?.completed !== 'undefined') {
    if (typeof input.completed !== 'boolean') errors.push('completed must be boolean');
  } else {
    completed = false;
  }
  if (errors.length) return { ok: false, errors };
  return { ok: true, value: { title, description, completed } };
}

export function validateUpdateTodo(input) {
  return validateNewTodo(input);
}

export function validatePatchTodo(input) {
  const allowed = ['title', 'description', 'completed'];
  const unknownKeys = Object.keys(input || {}).filter(k => !allowed.includes(k));
  const errors = [];
  if (!input || typeof input !== 'object' || Object.keys(input).length === 0) errors.push('Body cannot be empty');
  if (unknownKeys.length) errors.push(`Unknown fields: ${unknownKeys.join(', ')}`);
  if (input?.title !== undefined && !input.title.toString().trim()) errors.push('title cannot be empty');
  if (input?.completed !== undefined && typeof input.completed !== 'boolean') errors.push('completed must be boolean');
  if (errors.length) return { ok: false, errors };
  const out = {};
  if (input?.title !== undefined) out.title = input.title.toString().trim();
  if (input?.description !== undefined) out.description = input.description.toString();
  if (input?.completed !== undefined) out.completed = input.completed;
  return { ok: true, value: out };
}
