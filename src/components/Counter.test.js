import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  // We are checimg component rendering of initail stage
  it("Counter displays initial count correctly", () => {
    const { getByTestId } = render(<Counter initial={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("Counter should increment by 1 if Increment button is clicked ", () => {
    const { getByTestId, getByRole } = render(<Counter initial={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(incrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("Counter should decrement by 1 if Decrement button is clicked ", () => {
    const { getByTestId, getByRole } = render(<Counter initial={0} />);
    const decrementButton = getByRole("button", { name: "Decrement" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);

    fireEvent.click(decrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);
  });
  it("Counter should reset if Increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initial={10} />);
    const resetButton = getByRole("button", { name: "Reset" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(10);

    fireEvent.click(resetButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(0);
  });
  it("Counter should reset if Increment button is clicked again", () => {
    const { getByTestId, getByRole } = render(<Counter initial={10} />);
    const resetButton = getByRole("button", { name: "Reset" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(10);

    fireEvent.click(resetButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(0);
  });
  it("changes color to red when count is negative, and aqua otherwise", () => {
    const { getByTestId } = render(<Counter initial={20} />);
    const countElement = getByTestId("count");
    const computedStyle = window.getComputedStyle(countElement);
    // console.log("computedStyle", computedStyle._values.color);

    if (parseInt(computedStyle._values.color, 10) <= 0) {
      expect(computedStyle.color).toBe("red");
    } else {
      expect(computedStyle.color).toBe("aqua");
    }
  });
});
