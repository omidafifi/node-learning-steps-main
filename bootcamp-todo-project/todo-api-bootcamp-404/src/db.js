
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo_db';
const client = new MongoClient(uri);
let db;

export async function getDb() {
  if (!db) {
    await client.connect();
    const dbNameFromEnv = process.env.DB_NAME;
    let dbName = dbNameFromEnv;
    if (!dbName) {
      // اگر در URI نام دیتابیس نیست، پیش‌فرض
      try {
        const parsed = new URL(uri);
        dbName = parsed.pathname.replace('/', '') || 'todo_db';
      } catch {
        dbName = 'todo_db';
      }
    }
    db = client.db(dbName);
    // ایندکس‌ها
    await db.collection('todos').createIndex({ createdAt: 1 });
    await db.collection('todos').createIndex({ completed: 1 });
  }
  return db;
}

export function getClient() {
  return client;
}
