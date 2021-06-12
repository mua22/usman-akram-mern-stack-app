var cron = require("node-cron");
var clearProducts = require("./clearProducts");
function startCronJobs() {
  console.log("Starting Cron Jobs");
  cron.schedule("*/30 * * * *", () => {
    clearProducts();
  });
}

module.exports.startCronJobs = startCronJobs;
