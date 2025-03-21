// import { Disc } from "./Disc";
// import { Discography } from "./Discography";
// import { MusicArchive } from "./MusicArchive";
// import { Singer } from "./Singer";
// import { Song } from "./Song";
// import { Single } from "./Single";
// /// THE WEEKND
// // Instancias de canciones del álbum "After Hours"
// const blinding_lights = new Song(
//   "Blinding Lights",
//   202,
//   "Pop",
//   true,
//   2500000000,
// );
// const save_your_tears = new Song(
//   "Save Your Tears",
//   215,
//   "Pop",
//   true,
//   1800000000,
// );
// const after_hours = new Song("After Hours", 361, "Pop", false, 800000000);
// let A_after_hours = new Disc(
//   "After Hours",
//   2020,
//   blinding_lights,
//   save_your_tears,
//   after_hours,
// );
// // Instancias de canciones del álbum "Dawn FM" (2022)
// const sacrifice = new Song("Sacrifice", 196, "Techno", true, 300000000);
// const out_of_time = new Song("Out of Time", 227, "Pop", true, 200000000);
// const less_than_zero = new Song("Less Than Zero", 203, "Pop", true, 150000000);
// let A_dawn_fm = new Disc(
//   "Dawn FM",
//   2022,
//   sacrifice,
//   out_of_time,
//   less_than_zero,
// );

// let TW_discography = new Discography<Disc>(
//   "The Weeknd Albums",
//   A_after_hours,
//   A_dawn_fm,
// );
// let The_Weeknd = new Singer("The Weeknd", 23000000000, TW_discography);

// /// BEJO
// // Instancias de canciones del álbum "Tripi Hapa" (2018)
// const a_mi_manera = new Song("A mi manera", 200, "Urban", true, 5000000);
// const fumandote_un_blunt = new Song("Fumandote un blunt", 210, "Urban", true, 6000000);
// const cincuenta_estrellas_michelin = new Song(
//   "50 estrellas michelin",
//   220,
//   "Urban",
//   false,
//   4500000,
// );
// let BC_tripi_hapa = new Single(
//   "Tripi Hapa",
//   2018,
//   a_mi_manera,
//   fumandote_un_blunt,
//   cincuenta_estrellas_michelin,
// );

// // Instancias de canciones del álbum "Barracudas" (2021)
// const rap_ido = new Song("Rap ido", 190, "Urban", true, 7000000);
// const rapina = new Song("rapiña", 205, "Urban", true, 6500000);
// const rapapolvo = new Song("rapapolvo", 215, "Urban", true, 8000000);
// let BC_barracudas = new Disc("Barracudas", 2021, rap_ido, rapina, rapapolvo);

// let Bejo_discography = new Discography<Single|Disc>("Bejo Albums", BC_tripi_hapa, BC_barracudas);
// let Bejo = new Singer("Bejo", 500000000, Bejo_discography);

// /// DOJA CAT
// // Instancias de canciones del álbum "Hot Pink" (2019)
// const say_so = new Song("Say So", 235, "Pop", true, 2000000000);
// const juicy = new Song("Juicy", 180, "Urban", true, 1500000000);
// const like_that = new Song("Like That", 200, "Pop", false, 1200000000);
// let DC_hot_pink = new Disc("Hot Pink", 2019, say_so, juicy, like_that);

// // Instancias de canciones del álbum "Planet Her" (2021)
// const kiss_me_more = new Song("Kiss Me More", 210, "Pop", true, 2500000000);
// const need_to_know = new Song("Need to Know", 190, "Urban", true, 1800000000);
// const you_right = new Song("You Right", 195, "Urban", false, 1600000000);
// let DC_planet_her = new Disc("Planet Her", 2021, kiss_me_more, need_to_know, you_right,);

// let DojaCat_discography = new Discography<Single>("Doja Cat Albums", DC_hot_pink, DC_planet_her);
// let Doja_Cat = new Singer("Doja Cat", 15000000000, DojaCat_discography);

// let Library = new MusicArchive(The_Weeknd, Bejo, Doja_Cat);

// // console.log(The_Weeknd.PrintSinger())
// // console.log(Bejo.PrintSinger())
// // console.log(Doja_Cat.PrintSinger())

// Library.Print();

// // Library.SearchSinger('Bejo')
// // Library.SearchSinger('Kordhell')

// // Library.SearchDisc('After Hours')
// // Library.SearchDisc('Hipi Hapa')

// // Library.SearchSong('Say So')
// // Library.SearchSong('La Florinata')

// // console.log(Library.TotalViews('After Hours'))
// // console.log(Library.TotalDuration('After Hours'))
