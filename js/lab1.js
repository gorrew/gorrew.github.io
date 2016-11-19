
let database = []; // tom lista

function createMovieObject(title, year, genre) {
	
	let film = {
    title : title,
    year : year,
    genre : genre,
    ratings : [],
    toString : function (){
    	console.log("Film title: ", this.title, "\n",
    	"Från: ", this.year, "\n",
    	"Typ av film: ", this.genre, "\n",
    	"Betyg: ", getAvgRate(this.ratings),"/5"
    	);
    }
	};
    return film;
}

let movie = createMovieObject('The Force Awakens', 2015, "scifi");
rateMovie(movie,1);
rateMovie(movie,1);
rateMovie(movie,1);
rateMovie(movie,1);
database.push(movie);

let movie2 = createMovieObject('The Force Awakens2', 2016, "scifi");
rateMovie(movie2,5);
rateMovie(movie2,2);
rateMovie(movie2,3);
rateMovie(movie2,1);
database.push(movie2);

let movie3 = createMovieObject('The Da vinci code', 2006, "Thriller");
rateMovie(movie3,1);
rateMovie(movie3,4);
rateMovie(movie3,3);
rateMovie(movie3,3);
database.push(movie3);

let movie4 = createMovieObject('Angels & Demons', 2009, "Thriller");
rateMovie(movie4,4);
rateMovie(movie4,4);
rateMovie(movie4,2);
rateMovie(movie4,3);
database.push(movie4);

let movie5 = createMovieObject('Inferno', 2016, "Thriller");
rateMovie(movie5,5);
rateMovie(movie5,3);
rateMovie(movie5,1);
rateMovie(movie5,4);
database.push(movie5);
database;

function rateMovie(movie, rate) {
    movie.ratings.push(rate);
}

//getAvgRate(database[0].ratings); används för test
//database[0].ratings; används för test


//Hämtar medelvärdet, denna function anropas i funktionerna getBestMovie & getWorstMovie. 
function getAvgRate(rateArray){
	//rateArray = database[i].ratings & bestMovie.ratings som anropas i if-satsen från getbest & worst. ser ut så här -> 
	//getAvgRate(database[i].ratings) & getAvgRate(bestMovie.ratings)
	
		let avgSum = 0;
		let totalSum = 0;
		
		if(rateArray.length === 0){
			
        	return ;
    	} 
    	
		for(let i = 0; i < rateArray.length; i++){
			
			totalSum = totalSum + rateArray[i];
			//console.log(totalSum); Skriver console.log för att se värdet av totalSum i loppen.
		}
		avgSum = totalSum / rateArray.length;
		//console.log(avgSum); Skriver console.log för att se värdet av avgSum.
		//rateArray.averageRate = (avgSum); görs för att lägga till en propety för ratings medelvärde. Används inte just nu.
		return avgSum;
	}
	
function getBestMovie(database) {
		
		let bestMovie = database[0]; // bestMovie är nu första objektet i database-listan.
		
		for(let i = 0; i < database.length; i++){ //går igenom database-listan
			
			
			//if-statsen säger: om (objektets rating i listan är större än 0 & medelvärdet) är större än (bestmovie.ratings) <- detta fall första objektet i listan) då ska database[i](detta objekt) bli bestMovie (bästa ratingfilmen)
			//
			 if(database[i].ratings.length > 0 && getAvgRate(database[i].ratings) > getAvgRate(bestMovie.ratings)){
				bestMovie = database[i]; 
			}
		}
	return bestMovie;
}

function getWorstMovie(database) {
		let worstMovies = [];
		let worstMovie = database[0];
		for(let i = 0; i < database.length; i++){
			
			 if(database[i].ratings.length > 0 && getAvgRate(database[i].ratings) < getAvgRate(worstMovie.ratings)){
			 	worstMovie = database[i];
			}
			else if(database[i].ratings.length > 0 && getAvgRate(database[i].ratings) === getAvgRate(worstMovie.ratings)){
				
				worstMovie = database[i];
				worstMovies.push(database[i]);
			}
		}
	return worstMovie,worstMovies;
}

function getMoviesThisYear(database,year){
  let MovieThisYear = []; 						// skapar en tom lista
  for(let i = 0;i<database.length;i++){			//går igenom database-listan
      if(database[i].year === year){			// om objektets year är lika med det year vi lagt i parametern så läggs detta till i listan och 										visar alla filmer från det året vi valt. (kolla parametrana längst ner i koden så kommer det 										vara klarare)
          MovieThisYear.push(database[i]);
      }
  }
  return MovieThisYear;
}

function getMoviesByGenre(database,genre){
  let sameGenre = [];
  for(let i = 0; i < database.length; i++){
      if(database[i].genre === genre){
  
         sameGenre.push(database[i]);
      }
  }
  
  return sameGenre ;
}
movie4.toString();
//getAvgRate(movie.ratings);
//getAvgRate(movie2.ratings);
//getAvgRate(movie3.ratings);
//getAvgRate(movie4.ratings);
//getAvgRate(movie5.ratings);
//getWorstMovie(database);
//getBestMovie(database);
//getMoviesThisYear(database, 2016);
//getMoviesByGenre(database, "scifi");
