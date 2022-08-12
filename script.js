 
  'use strict';

  
  
  

 const personalMovieDB = {
  'count': 0,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,

  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();

    while(personalMovieDB.count == '' || personalMovieDB.count == null || !Number.isInteger(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
 },

 questionsAboutMovies: function() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');
  
          if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
          } else {
            console.log('erorr');
            i--;
          }
  
   }
 },

 movieStatistics: function() {

  if (personalMovieDB.count <= 10) {
    console.log('Просмотренно слишком мало фильмов');
   } else if (personalMovieDB.count > 10, personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
   } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
   } else {
    console.log('Произошла ошибка');
   }

 },

 showMyDB: function(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
},

writeYourGenres: function() {

  for(let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером  ${i}?`);

    if (genre != '' && genre != null) {
      personalMovieDB.genres[i - 1] = genre;
    } else {
      i--;
    }
  }

  personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр под номером ${i + 1} это ${item}`);
  });

 },

 toggleVisible: function() {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;    
      } else {
        personalMovieDB.privat = true; 
      }
 }

 };


 personalMovieDB.start();
 personalMovieDB.questionsAboutMovies();
 personalMovieDB.movieStatistics();
 personalMovieDB.showMyDB(personalMovieDB.privat);
 personalMovieDB.toggleVisible();
 personalMovieDB.writeYourGenres();

 
 



console.log(personalMovieDB);



