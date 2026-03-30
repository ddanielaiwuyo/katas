// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Counter from "./components/Counter";
//
// test("renders with inital value 0", () => {
// 	render(<Counter />)
//
// 	expect(screen.getByRole("heading")).toHaveTextContent("0")
// })
//
// test("decreases value by 1 when decrement button is clicked", async () => {
// 	render(<Counter />)
// 	await userEvent.click(screen.getByText(/Decrement/i))
//
// 	expect(screen.getByRole("heading")).toHaveTextContent("-1")
// })
//
//
// test("renders with a new value of two , when Increment button is clicked twice", async () => {
// 	render(<Counter />)
// 	const incrementBtn = screen.getByText(/Increment/i)
// 	await userEvent.click(incrementBtn)
// 	await userEvent.click(incrementBtn)
//
//
// 	const counterVal = screen.getByRole("heading")
// 	console.log("COUNTER -> ", counterVal.innerHTML)
// 	expect(counterVal).toHaveTextContent("2")
// })
