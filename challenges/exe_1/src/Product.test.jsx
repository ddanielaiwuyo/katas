import { render, screen } from "@testing-library/react"
import Product from "./components/Product"

test("Product component renders successfully", () => {
	render(<Product
		name="Test Product"
		description="Testing Product component renders"
		price={1999}
	/>);

	// For case-insenstive, use regex pattern / text_content / i
	expect(screen.getByText(/product name: Test Product/i)).toBeInTheDocument()
	expect(screen.getByText(/product price: 1999/i)).toBeInTheDocument()
	expect(screen.getByText(/product description: Testing Product component renders/i)).toBeInTheDocument()
})
