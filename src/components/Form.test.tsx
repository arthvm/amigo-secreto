import { screen, render, fireEvent } from "@testing-library/react";
import { Form } from "./Form";
import { RecoilRoot } from "recoil";
import { act } from "react";

describe("Form.tsx behavior", () => {
  test("Empty input should not have active button for participants submission", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("Should clear the input after name is submitted", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Arthur Mariano",
      },
    });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Duplicated names should not be accepted", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Arthur Mariano",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Arthur Mariano",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe("Nomes nao podem ser duplicados!");
  });

  test("Error message should dissapear after timers", () => {
    vi.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Arthur Mariano",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Arthur Mariano",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      vi.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
