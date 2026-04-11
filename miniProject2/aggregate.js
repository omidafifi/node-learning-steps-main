const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_name = "mongodb-toturials";
const client = new MongoClient(DB_URL);
async function main() {
  await client.connect();
  console.log("connected to mongodb");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const result = await userCollection
    .aggregate([
      {
        $match: {
          firstName: "omidreza",
        },
      },
      {
        $project: {
          age: 0,
          skills: 0,
        },
      },
      {
        $addFields: {
          Detuschkentniss: "B2",
        },
      },
    ])
    .toArray();
  console.log(result);
}

main();

// $match: فیلتر کردن داده‌ها (مانند WHERE در SQL).
// $project: انتخاب، حذف یا تغییر نام فیلدها و ساخت فیلدهای محاسباتی.
// $addFields: اضافه کردن فیلد جدید یا تغییر مقدار فیلد موجود بدون حذف بقیه فیلدها.
// $set: عملکردی دقیقاً مشابه $addFields دارد (در نسخه‌های جدید مرسوم‌تر است).
// $group: گروه‌بندی داده‌ها بر اساس یک فیلد خاص و انجام محاسباتی مثل جمع و میانگین.
// $sort: مرتب‌سازی نتایج به صورت صعودی (1) یا نزولی (-1).
// $limit: محدود کردن تعداد اسناد خروجی (مثلاً فقط ۱۰ تای اول).
// $skip: رد کردن تعداد مشخصی از اسناد (کاربردی در صفحه‌بندی یا Pagination).
// $lookup: متصل کردن (Join) داده‌ها از یک Collection دیگر (مانند LEFT JOIN).
// $unwind: باز کردن فیلدهای آرایه‌ای و تبدیل هر عنصر آرایه به یک سند مجزا.
// $count: شمارش تعداد کل اسنادِ رسیده به این مرحله و نمایش آن در یک فیلد.
// $facet: اجرای چندین Pipeline مختلف به صورت همزمان روی یک سری داده.
// $replaceRoot: جایگزین کردن کل سند فعلی با یک سند داخلی یا فیلد دیگر.
// $sortByCount: گروه‌بندی بر اساس یک مقدار، شمارش تعداد هر گروه و مرتب‌سازی بر اساس تعداد.
// $out: ذخیره کردن نتیجه نهایی Aggregation در یک Collection جدید.
// $merge: ادغام نتایج خروجی با یک Collection موجود (Update یا Insert).
