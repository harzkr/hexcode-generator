import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.on("connect", function () {
  console.log("Redis Connected!");
});

client.connect();

module.exports = {
  client,
};