import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Body from "../Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { act, useState } from "react";
import UserContext from "../../utils/UserContext";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

const AppWithUserContext = () => {
  const [userName, setUserName] = useState("Atulya Jaiswal");

  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Body />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change the Login button to Logout on click, and back to Login after Logout is clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();

  fireEvent.click(logoutButton);

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a status", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );

  // Initially online
  const onlineStatus = screen.getByText("Status: 🟢");
  expect(onlineStatus).toBeInTheDocument();

  // Simulate going offline
  fireEvent(window, new Event("offline"));

  // Assert status change
  expect(screen.getByText("Status: 🔴")).toBeInTheDocument();

  // Assert offline message is shown
  expect(
    screen.getByText(
      "Looks like you're Offline!! Please check your internet connection."
    )
  ).toBeInTheDocument();
});

it("Should update username when input changes and reflect in Header", async () => {
  await act(async () => render(<AppWithUserContext />));

  const usernameInput = screen.getByTestId("usernameInput");

  expect(usernameInput.value).toBe("Atulya Jaiswal");

  fireEvent.change(usernameInput, { target: { value: "atulyaaj" } });

  expect(usernameInput.value).toBe("atulyaaj");

  // Header
  expect(screen.getByText("atulyaaj")).toBeInTheDocument();
});
