require('dotenv').config();
const request = require("supertest");
const app = require("../servers/Index");

describe("Test /", () => {
  it("should return 200", async () => {
    const response = await request(app)
      .get("/api/test")
      .set("Accept", "application/json")
      .expect(200);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toEqual("Hello World!");
  });

  test("should return test api", async () => {
    const response = await request(app)
      .get("/api/jokosu10")
      .set("Accept", "application/json")
      .expect(200);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toEqual("Joko Susilo Ganteng");
  });
});