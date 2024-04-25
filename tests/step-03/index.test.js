// tests/index.test.js

const parseQuery = require("../../src/queryParser");

test("Parse SQL Query", () => {
  const query = "SELECT id, name FROM sample";
  const parsed = parseQuery(query);
  console.log(parsed);
  expect(parsed).toEqual({
    fields: ["id", "name"],
    table: "sample",
    whereClauses: [],
    joinTable: null,
    joinCondition: null,
  });
});
