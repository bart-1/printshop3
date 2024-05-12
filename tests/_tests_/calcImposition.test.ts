import { render, fireEvent } from "@testing-library/react";
import { calcImposer } from "../../resources/ts/helpers";

describe("imposition calc module", () => {
    test("imposition of A6 on SRA3 sheet gives equal 8", () => {
        expect(calcImposer(320, 450, 105, 148, 10, 4)).toBe(8);
    });
});
describe("imposition calc module", () => {
    test("imposition of A5 on SRA3 sheet gives equal 4", () => {
        expect(calcImposer(320, 450, 148, 210, 10, 4)).toBe(4);
    });
});
describe("imposition calc module", () => {
    test("imposition of A5R on SRA3 sheet gives equal 4", () => {
        expect(calcImposer(320, 450, 210, 148, 10, 4)).toBe(4);
    });
});
describe("imposition calc module", () => {
    test("imposition of DL on SRA3 sheet gives equal 6", () => {
        expect(calcImposer(320, 450, 99, 210, 10, 4)).toBe(6);
    });
});
describe("imposition calc module", () => {
    test("imposition of 100x70 on SRA3 sheet gives equal 18", () => {
        expect(calcImposer(320, 450, 100, 70, 10, 4)).toBe(18);
    });
});


