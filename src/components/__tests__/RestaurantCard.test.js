import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Open label", () => {
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  render(<RestaurantCardOpen resData={MOCK_DATA} />);

  const openLabel = screen.getByText("Open");

  expect(openLabel).toBeInTheDocument();
});
