
# Todo API — Bootcamp 404

یک API ساده **CRUD** برای مدیریت To‑Do List با **Node.js (بدون Express، فقط http داخلی)** و **MongoDB**.

## 1) پیش‌نیازها
- Node.js 18+
- MongoDB (لوکال یا Atlas)

## 2) نصب و اجرا
```bash
# 1) نصب وابستگی‌ها
npm install

# 2) ساخت فایل .env از روی نمونه
cp .env.example .env
# مقدار MONGODB_URI و DB_NAME را متناسب با محیط خودتان تنظیم کنید

# 3) اجرا در حالت توسعه
npm run dev

# یا اجرا در حالت عادی
npm start
```

سرور به‌صورت پیش‌فرض روی `http://localhost:3000` اجرا می‌شود (قابل تغییر با PORT در .env).

## 3) روت‌ها (طبق صورت‌مسئله)
- `GET /todos` → دریافت همه تسک‌ها (پشتیبانی از `?completed=true|false` و `?sort=createdAt:asc|desc`)
- `GET /todos/:id` → دریافت یک تسک خاص
- `POST /todos` → ایجاد تسک جدید
- `PUT /todos/:id` → به‌روزرسانی کامل تسک
- `PATCH /todos/:id` → به‌روزرسانی جزیی (Partial Update)
- `DELETE /todos/:id` → حذف تسک

### قالب داده (Schema)
```json
{
  "_id": "MongoID",
  "title": "عنوان تسک",
  "description": "توضیحات کامل",
  "completed": false,
  "createdAt": "تاریخ ایجاد ISO"
}
```

- `completed` به‌صورت `boolean` (پیش‌فرض `false`)
- `createdAt` هنگام ایجاد به‌صورت خودکار تنظیم می‌شود

## 4) نمونه درخواست‌ها با curl

### ایجاد تسک
```bash
curl -X POST http://localhost:3000/todos   -H "Content-Type: application/json"   -d '{"title":"Buy milk","description":"2L","completed":false}'
```

### دریافت همه تسک‌ها (فیلتر و مرتب‌سازی)
```bash
curl "http://localhost:3000/todos?completed=false&sort=createdAt:desc"
```

### دریافت آیتم مشخص
```bash
curl http://localhost:3000/todos/<id>
```

### ویرایش کامل (PUT)
```bash
curl -X PUT http://localhost:3000/todos/<id>   -H "Content-Type: application/json"   -d '{"title":"Buy milk & eggs","description":"2L + 12 eggs","completed":true}'
```

### ویرایش جزیی (PATCH)
```bash
curl -X PATCH http://localhost:3000/todos/<id>   -H "Content-Type: application/json"   -d '{"completed":true}'
```

### حذف
```bash
curl -X DELETE http://localhost:3000/todos/<id>
```

## 5) نکات پیاده‌سازی
- بدنه درخواست‌ها به‌صورت دستی از روی استریم خوانده و با محدودیت ۱MB پارس می‌شود.
- روی کلکشن `todos` ایندکس‌های `createdAt` و `completed` ساخته شده است.
- برای اعتبارسنجی ورودی‌ها پیام خطاهای واضح و کدهای وضعیت مناسب (`400`, `404`, `500`) برمی‌گردد.
- CORS برای تست کلاینت‌های مختلف فعال است.
```

