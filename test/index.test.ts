import { describe, expect, it } from "vitest";
import { cow } from "../src/index";

describe("index", () => {
	describe("cow", () => {
		it("should return a cow saying the message", () => {
			const result = cow();
			expect(result).toContain("I'm a moooodule");
			expect(result).toContain("oO"); // eyes
			expect(result).toContain("U "); // tongue
		});
	});
});
