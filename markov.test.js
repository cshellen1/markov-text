const { MarkovMachine } = require("./markov.js");

beforeAll(() => {
	m = new MarkovMachine("Green eggs and ham I do not like them Sam I am");
});

test("makeText", () => {
	expect.anything(m.makeText(15));
});

test("chains", () => {
	expect(m.chains).toBeInstanceOf(Map);
});

test("keys in chains", () => {
	expect(m.chains.keys()).toContain("Green");
});

test("words", () => {
    expect(m.words).toHaveLength(12);
});

test("words in m.words", () => {
	expect(m.words).toContain("Green");
});

