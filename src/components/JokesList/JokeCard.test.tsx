import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import { JokeCard } from "./JokeCard";

test("renders the joke card", () => {
    renderWithProviders(<JokeCard />);
    expect(screen.getByText(/Joke content/i)).toBeInTheDocument();
});