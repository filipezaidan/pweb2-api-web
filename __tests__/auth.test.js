const client = require("./client");

const email = "test@gmail.com";

test("Register", async () => {
    const body = {
        name: "Eike Fabrício",
        email,
        password: "12345678"
    }

    const { statusCode } = await client.post("/register").send(body);

    expect(statusCode).toBe(200);
});

test("Login", async () => {
    const body = {
        email,
        password: "12345678"
    }

    const { statusCode } = await client.post("/login").send(body);

    expect(statusCode).toBe(200);
});

test("Wrong credentials", async () => {
    const body = {
        email,
        password: "123456789"
    }

    const { statusCode } = await client.post("/login").send(body);

    expect(statusCode).toBe(401);
});