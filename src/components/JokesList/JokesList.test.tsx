import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils"
import { JokesList } from "./JokesList";

test('renders the joke list', () => {
    renderWithProviders(<JokesList />);

    expect(screen.getByText(/No jokes available/i)).toBeInTheDocument();
})