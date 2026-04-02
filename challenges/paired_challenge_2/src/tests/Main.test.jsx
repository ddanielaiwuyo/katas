import { screen, render } from "@testing-library/react";
import Gig from "../components/Gig";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

// This is similar to the mock module in python?
// Where you mock a particaular fuction/method a class has 
// and control the return values
describe("Gig Component", () => {
	// Run before each test suite
	beforeEach(() => {
		// Mocking the fetch api the Gig Uses
		global.fetch = vi.fn(() =>
			Promise.resolve({
				status: 200,
				json: () =>
					Promise.resolve([
						{
							event_id: 1,
							band_name: "The Shifting Sands",
							description: "A cool band",
							time: Date.now(),
						},
					]),
			})
		);
	});

	it("shows loading initially", () => {
		render(<Gig />);
		expect(
			screen.getByText(/Bear with us/i)
		).toBeInTheDocument();
	});

	it("renders API data", async () => {
		render(<Gig />);

		expect(
			await screen.findByText("The Shifting Sands")
		).toBeInTheDocument();
	});

	it("Moves gig to favourites when button is clicked", async () => {
		render(<Gig />);

		const addButton = await screen.findByText(/Add to Favourites/i)

		await userEvent.click(addButton)

		expect(screen.getByText(/Remove from Favourites/i)).toBeInTheDocument()
	})
});
