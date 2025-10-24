import { say } from "cowsay";

export function cow(text = "I'm a moooodule") {
	return say({
		text,
		e: "oO",
		T: "U ",
	}); // just as example code. see https://www.npmjs.com/package/cowsay#usage-as-a-module
}
