import { describe, expect, it } from "vitest";
import { cow } from "../src/index";

describe("index", () => {
	describe("cow", () => {
		it("should return a cow saying the default message", () => {
			const result = cow();
			expect(result).toContain("I'm a moooodule");
			expect(result).toContain("oO"); // eyes
			expect(result).toContain("U "); // tongue
		});

		it("should return a cow saying a custom message", () => {
			const customMessage = "Hello from tests!";
			const result = cow(customMessage);
			expect(result).toContain(customMessage);
			expect(result).toContain("oO"); // eyes
			expect(result).toContain("U "); // tongue
		});

		it("should return a cow saying a short message", () => {
			const shortMessage = "Hi!";
			const result = cow(shortMessage);
			expect(result).toContain(shortMessage);
			expect(result).toContain("oO"); // eyes
			expect(result).toContain("U "); // tongue
		});

		it("should return a cow saying a multiline message", () => {
			const multilineMessage = "Hello\nWorld\nFrom TypeScript!";
			const result = cow(multilineMessage);
			expect(result).toContain("Hello");
			expect(result).toContain("World");
			expect(result).toContain("From TypeScript!");
			expect(result).toContain("oO"); // eyes
			expect(result).toContain("U "); // tongue
		});
	});
});
