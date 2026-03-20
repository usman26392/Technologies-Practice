
import request from "supertest";
import { app } from "../app.js";


describe("GET /", ()=> {
    it("Should return 200 OK", async ()=> {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            message: "Hello world!"
        });

    });
})