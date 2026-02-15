// MVC ==>
//MVC
const service = require("../services/products.service");

async function list(req, res, next) {
  try {
    const items = await service.listProducts({ limit: +req.query.limit || 50 });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } catch (e) {
    next(e);
  }
}
module.exports = { list };

// products.service.js
const repo = require("../repositories/products.repository");

async function listProducts({ limit }) {
  const rows = await repo.findMany({ limit });
  // منطق تجاری: فیلتر کردن آیتم‌های غیر فعال، محاسبه تخفیف، ...
  return rows.filter((r) => r.active);
}
module.exports = { listProducts };

// products.repository.js
const db = require("../models/product.model"); // فایل دیتا یا ORM
async function findMany({ limit }) {
  return db.find({}).slice(0, limit); // جای ORM/کوئری واقعی
}
module.exports = { findMany };
te;
