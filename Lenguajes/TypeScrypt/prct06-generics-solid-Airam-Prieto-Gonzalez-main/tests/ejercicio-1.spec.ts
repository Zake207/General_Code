import { describe, test, expect } from "vitest";
import {
  Series,
  Films,
  Documentals,
} from "../src/ejercicio-1/Collection_Classes";
import { Serie, Film, Documental } from "../src/ejercicio-1/Stream_Classes";

describe("ejercicio-1", () => {
  test("SerieCollection", () => {
    let SquidGame = new Serie("Squid Game", 2022, 24, "Oh Il Shun", 2);
    let TheLastOfUs = new Serie("The Last Of Us", 2023, 20, "Yoel", 1);
    let MyPersonalSerie = new Serie("Just Testing", 2023, 20, "Yoel", 2);

    let SerieCollection = new Series("Netflix Series");
    SerieCollection.AddStream(SquidGame);
    SerieCollection.AddStream(TheLastOfUs);
    SerieCollection.AddStream(MyPersonalSerie);

    expect(SerieCollection.GetStream("Squid Game")?.name).toBe("Squid Game");
    expect(SerieCollection.SearchByYear(2023)).toBe(
      " STREAMS PUBLISHED IN 2023 : The Last Of Us, Just Testing, ",
    );
    expect(SerieCollection.SearchBySeasons(2)).toBe(
      " STREAMS OF 2 SEASONS : Squid Game, Just Testing, ",
    );
  });
  test("FilmCollection", () => {
    let PulpFiction = new Film(
      "Pulp Fiction",
      1994,
      120,
      "Tarantino",
      "Adventure",
    );
    let FilmCollection = new Films("Netflix Films");
    FilmCollection.AddStream(PulpFiction);
    expect(FilmCollection.GetStream("Pulp Fiction")?.name).toBe("Pulp Fiction");
    expect(FilmCollection.SearchByYear(1994)).toBe(
      " STREAMS PUBLISHED IN 1994 : Pulp Fiction, ",
    );
    expect(FilmCollection.SearchByGender("Adventure")).toBe(
      " STREAMS OF Adventure: Pulp Fiction, ",
    );
  });
});
