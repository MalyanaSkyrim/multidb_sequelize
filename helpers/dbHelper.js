const getDatabasesUrls = () => {
  return Object.keys(process.env)
    .map((key) => {
      if (key.includes("DB_URL_")) return process.env[key];
    })
    .filter((dbUrl) => !!dbUrl);
};

module.exports = {
  getDatabasesUrls,
};
