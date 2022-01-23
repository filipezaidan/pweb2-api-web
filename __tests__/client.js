const supertest = require("supertest");
const app = require("../src/app");

test("Client", () => expect(1).toBe(1));

module.exports = supertest(app);