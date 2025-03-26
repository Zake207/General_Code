"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Collection_Classes_1 = require("../src/ejercicio-1/Collection_Classes");
const Stream_Classes_1 = require("../src/ejercicio-1/Stream_Classes");
(0, vitest_1.describe)("ejercicio-1", () => {
    (0, vitest_1.test)("SerieCollection", () => {
        var _a;
        let SquidGame = new Stream_Classes_1.Serie("Squid Game", 2022, 24, "Oh Il Shun", 2);
        let TheLastOfUs = new Stream_Classes_1.Serie("The Last Of Us", 2023, 20, "Yoel", 1);
        let MyPersonalSerie = new Stream_Classes_1.Serie("Just Testing", 2023, 20, "Yoel", 2);
        let SerieCollection = new Collection_Classes_1.Series("Netflix Series");
        SerieCollection.AddStream(SquidGame);
        SerieCollection.AddStream(TheLastOfUs);
        SerieCollection.AddStream(MyPersonalSerie);
        (0, vitest_1.expect)((_a = SerieCollection.GetStream("Squid Game")) === null || _a === void 0 ? void 0 : _a.name).toBe("Squid Game");
        (0, vitest_1.expect)(SerieCollection.SearchByYear(2023)).toBe(" STREAMS PUBLISHED IN 2023 : The Last Of Us, Just Testing, ");
        (0, vitest_1.expect)(SerieCollection.SearchBySeasons(2)).toBe(" STREAMS OF 2 SEASONS : Squid Game, Just Testing, ");
    });
    (0, vitest_1.test)("FilmCollection", () => {
        var _a;
        let PulpFiction = new Stream_Classes_1.Film("Pulp Fiction", 1994, 120, "Tarantino", "Adventure");
        let FilmCollection = new Collection_Classes_1.Films("Netflix Films");
        FilmCollection.AddStream(PulpFiction);
        (0, vitest_1.expect)((_a = FilmCollection.GetStream("Pulp Fiction")) === null || _a === void 0 ? void 0 : _a.name).toBe("Pulp Fiction");
        (0, vitest_1.expect)(FilmCollection.SearchByYear(1994)).toBe(" STREAMS PUBLISHED IN 1994 : Pulp Fiction, ");
        (0, vitest_1.expect)(FilmCollection.SearchByGender("Adventure")).toBe(" STREAMS OF Adventure: Pulp Fiction, ");
    });
});
