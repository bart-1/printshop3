import { render, fireEvent } from "@testing-library/react";
import { calcImposer } from "../../resources/ts/helpers";

describe("imposition calc module", () => {
    test("imposition of A6 on SRA3 sheet gives equal 8", () => {
        expect(calcImposer(320, 450, 105, 148, 10, 4)).toBe(8);
    });
});


