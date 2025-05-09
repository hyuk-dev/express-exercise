const request = require("supertest");
const app = require("../app"); // Express 앱 객체를 가져와야 함

describe("GET /", () => {
  it("기본 경로(/)는 200 상태코드와 함께 환영메시지를 응답해야합니다.", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World form Express!");
  });
});
