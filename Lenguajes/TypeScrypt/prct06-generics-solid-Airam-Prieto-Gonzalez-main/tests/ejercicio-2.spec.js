"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Disc_1 = require("../src/ejercicio-2/Disc");
const Discography_1 = require("../src/ejercicio-2/Discography");
const MusicArchive_1 = require("../src/ejercicio-2/MusicArchive");
const Singer_1 = require("../src/ejercicio-2/Singer");
const Single_1 = require("../src/ejercicio-2/Single");
const Song_1 = require("../src/ejercicio-2/Song");
(0, vitest_1.describe)("Music Archive Tests", () => {
    // Test instances
    const blinding_lights = new Song_1.Song("Blinding Lights", 202, "Pop", true, 2500000000);
    const save_your_tears = new Song_1.Song("Save Your Tears", 215, "Pop", true, 1800000000);
    const after_hours = new Song_1.Song("After Hours", 361, "Pop", false, 800000000);
    const A_after_hours = new Single_1.Single("After Hours", 2020, blinding_lights, save_your_tears, after_hours);
    const sacrifice = new Song_1.Song("Sacrifice", 196, "Techno", true, 300000000);
    const out_of_time = new Song_1.Song("Out of Time", 227, "Pop", true, 200000000);
    const less_than_zero = new Song_1.Song("Less Than Zero", 203, "Pop", true, 150000000);
    const A_dawn_fm = new Disc_1.Disc("Dawn FM", 2022, sacrifice, out_of_time, less_than_zero);
    const TW_discography = new Discography_1.Discography("The Weeknd Albums", A_after_hours, A_dawn_fm);
    const The_Weeknd = new Singer_1.Singer("The Weeknd", 23000000000, TW_discography);
    const Library = new MusicArchive_1.MusicArchive(The_Weeknd);
    (0, vitest_1.test)("should correctly print the singer information", () => {
        (0, vitest_1.expect)(The_Weeknd.PrintSinger()).toContain("The Weeknd");
        (0, vitest_1.expect)(The_Weeknd.PrintSinger()).toContain("23000000000");
    });
    (0, vitest_1.test)("should find the singer by name", () => {
        (0, vitest_1.expect)(Library.SearchSinger("The Weeknd")).toStrictEqual([
            ["The Weeknd", 23000000000, "   -After Hours   -Dawn FM"],
        ]);
        (0, vitest_1.expect)(Library.SearchSinger("Unknown")).toBeUndefined();
    });
    (0, vitest_1.test)("should find the disc by name", () => {
        (0, vitest_1.expect)(Library.SearchDisc("After Hours")).toStrictEqual([
            [
                "After Hours",
                "The Weeknd",
                2020,
                "   -Blinding Lights   -Save Your Tears   -After Hours",
            ],
        ]);
        (0, vitest_1.expect)(Library.SearchDisc("Unknown")).toBeUndefined();
    });
    (0, vitest_1.test)("should find the song by name", () => {
        (0, vitest_1.expect)(Library.SearchSong("Blinding Lights")).toStrictEqual([
            ["Blinding Lights", "The Weeknd", "Pop", 202, 2500000000],
        ]);
        (0, vitest_1.expect)(Library.SearchSong("Unknown")).toBeUndefined();
    });
    (0, vitest_1.test)("should calculate total views of a disc", () => {
        (0, vitest_1.expect)(Library.TotalViews("After Hours")).toBe(2500000000 + 1800000000 + 800000000);
    });
    (0, vitest_1.test)("should calculate total duration of a disc", () => {
        (0, vitest_1.expect)(Library.TotalDuration("After Hours")).toBe(202 + 215 + 361);
    });
});
