const { addNums, getUserNameByID } = require("./app.js");

test("Add two plus two to equal 4", () => {
    const testResult = addNums();
    expect(testResult).toEqual(4);
});

test("Get UserName by Id", async () => {
    const testResult = await getUserNameByID(1);
    await expect(testResult).toEqual("Bret");
});