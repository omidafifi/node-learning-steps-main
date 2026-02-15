const notFound = (res) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "route not found" }));
  res.end();
};

const errorHandler = {
  notFound,
};

module.exports = errorHandler;
 