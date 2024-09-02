import { RootState } from "../store";

export const getJokes = (state: RootState) => state.jokes.jokesList;