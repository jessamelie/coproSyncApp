import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { LoginForm } from "../packages/frontend/src/pages/homepage/loginForm/LoginForm";
import { MemoryRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
    useNavigate: vi.fn(),
  };
});

describe("LoginForm", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    (useNavigate as any).mockReturnValue(mockNavigate);

    const dummyUser = { email: "test@example.com", password: "Test1234!" };
    localStorage.setItem("users", JSON.stringify([dummyUser]));
    localStorage.setItem("token", "defgevd4dfdc554855d");
  });

  it("should successfully log in a user and allow navigation to /dashboard", async () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </MantineProvider>
    );

    const emailInput = screen.getByPlaceholderText(
      "login.form.email.label.placeholder"
    );
    const passwordInput = screen.getByPlaceholderText(
      "login.form.password.label.placeholder"
    );
    const loginButton = screen.getByRole("button", {
      name: "login.form.submit.button.text",
    });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Test1234!" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.getItem("token")).toBe("defgevd4dfdc554855d");
      const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser") || "{}"
      );
      expect(loggedInUser).toMatchObject({ email: "test@example.com" });
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });

  it("should display an error for invalid login", async () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </MantineProvider>
    );

    const emailInput = screen.getByPlaceholderText(
      "login.form.email.label.placeholder"
    );
    const passwordInput = screen.getByPlaceholderText(
      "login.form.password.label.placeholder"
    );
    const loginButton = screen.getByRole("button", {
      name: "login.form.submit.button.text",
    });

    fireEvent.change(emailInput, {
      target: { value: "test_wrong_email@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "Test1234!" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText("login.form.user.not.found.error")
      ).toBeInTheDocument();
    });
  });
});
