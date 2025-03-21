import { describe, test, expect } from "vitest";
import { Disc } from "../src/ejercicio-2/Disc";
import { Discography } from "../src/ejercicio-2/Discography";
import { MusicArchive } from "../src/ejercicio-2/MusicArchive";
import { Singer } from "../src/ejercicio-2/Singer";
import { Single } from "../src/ejercicio-2/Single";
import { Song } from "../src/ejercicio-2/Song";

describe("Music Archive Tests", () => {
  // Test instances
  const blinding_lights = new Song(
    "Blinding Lights",
    202,
    "Pop",
    true,
    2500000000,
  );
  const save_your_tears = new Song(
    "Save Your Tears",
    215,
    "Pop",
    true,
    1800000000,
  );
  const after_hours = new Song("After Hours", 361, "Pop", false, 800000000);
  const A_after_hours = new Single(
    "After Hours",
    2020,
    blinding_lights,
    save_your_tears,
    after_hours,
  );

  const sacrifice = new Song("Sacrifice", 196, "Techno", true, 300000000);
  const out_of_time = new Song("Out of Time", 227, "Pop", true, 200000000);
  const less_than_zero = new Song(
    "Less Than Zero",
    203,
    "Pop",
    true,
    150000000,
  );
  const A_dawn_fm = new Disc(
    "Dawn FM",
    2022,
    sacrifice,
    out_of_time,
    less_than_zero,
  );

  const TW_discography = new Discography<Single | Disc>(
    "The Weeknd Albums",
    A_after_hours,
    A_dawn_fm,
  );
  const The_Weeknd = new Singer("The Weeknd", 23000000000, TW_discography);

  const Library = new MusicArchive(The_Weeknd);

  test("should correctly print the singer information", () => {
    expect(The_Weeknd.PrintSinger()).toContain("The Weeknd");
    expect(The_Weeknd.PrintSinger()).toContain("23000000000");
  });

  test("should find the singer by name", () => {
    expect(Library.SearchSinger("The Weeknd")).toStrictEqual([
      ["The Weeknd", 23000000000, "   -After Hours   -Dawn FM"],
    ]);
    expect(Library.SearchSinger("Unknown")).toBeUndefined();
  });

  test("should find the disc by name", () => {
    expect(Library.SearchDisc("After Hours")).toStrictEqual([
      [
        "After Hours",
        "The Weeknd",
        2020,
        "   -Blinding Lights   -Save Your Tears   -After Hours",
      ],
    ]);
    expect(Library.SearchDisc("Unknown")).toBeUndefined();
  });

  test("should find the song by name", () => {
    expect(Library.SearchSong("Blinding Lights")).toStrictEqual([
      ["Blinding Lights", "The Weeknd", "Pop", 202, 2500000000],
    ]);
    expect(Library.SearchSong("Unknown")).toBeUndefined();
  });

  test("should calculate total views of a disc", () => {
    expect(Library.TotalViews("After Hours")).toBe(
      2500000000 + 1800000000 + 800000000,
    );
  });

  test("should calculate total duration of a disc", () => {
    expect(Library.TotalDuration("After Hours")).toBe(202 + 215 + 361);
  });
});
