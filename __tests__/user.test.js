const client = require("./client");

async function login() {
    const { body } = await client
        .post("/login")
        .send({ email: "eike@gmail.com", password: '12345678'});
    
    return body;       
}

test("No credentials", async () => {
    const { statusCode } = await client.get("/");

    expect(statusCode).toBe(401);
});

test("Not empty", async () => {
    const { id } = await login();

    const { body } = await client.get("/").set("Authorization", id);

    expect(body.length).toBeGreaterThanOrEqual(1);
});

test("Delete", async () => {
    const { id } = await login();

    const { statusCode } = await client.del(`/${id}`).set("Authorization", id);

    expect(statusCode).toBe(200);
});