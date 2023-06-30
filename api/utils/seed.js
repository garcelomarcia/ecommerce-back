const { User, Shirt_Model } = require("../models");
const db = require("../db");
const fakeData = require("./fakeData.json");

async function runSeed() {
  try {
    await db.sync({ force: true });
    await db.sync({ force: false });

    await User.create({
      first_name: "John",
      last_name: "Doe",
      email: "admin@mail.com",
      password: "password",
      is_admin: true,
    });

    await User.create({
      first_name: "Jane",
      last_name: "Doe",
      email: "demo@mail.com",
      password: "password",
      is_admin: false,
    });

    await Shirt_Model.bulkCreate(fakeData);

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("An error occurred during seed execution:", error);
  }
}

runSeed();
