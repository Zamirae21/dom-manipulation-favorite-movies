// Array of favorite movies
const favoriteMovies = [
    {
      name: "Inception",
      year: 2010,
      director: "Christopher Nolan",
      picture: "https://images5.alphacoders.com/112/thumb-1920-1122037.jpg"
    },
    {
      name: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      picture: "https://image.tmdb.org/t/p/original/1bGBTCPC1lcvrNTluh1bgr1dd2F.jpg"
    },
    {
      name: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      picture: "https://image.tmdb.org/t/p/original/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg"
    }
  ];
  
  // Grab the <ol> element
  const movieList = document.getElementById('movie-list');
  
  // Map over the array and build <li> elements for each movie
  favoriteMovies.forEach((movie, index) => {
    const listItem = document.createElement('li');
    
    // Create elements for movie information
    const movieName = document.createElement('p');
    const movieYear = document.createElement('p');
    const movieDirector = document.createElement('p');
    const moviePoster = document.createElement('img');
  
    // Set movie information
    movieName.textContent = `Name: ${movie.name}`;
    movieYear.textContent = `Year: ${movie.year}`;
    movieDirector.textContent = `Director: ${movie.director}`;
    moviePoster.src = movie.picture;
    moviePoster.alt = movie.name + " Poster";
    moviePoster.style.width = "200px"; // Set image width
  
    // Append elements to list item
    listItem.appendChild(movieName);
    listItem.appendChild(movieYear);
    listItem.appendChild(movieDirector);
    listItem.appendChild(moviePoster);
  
    // Append list item to movie list
    movieList.appendChild(listItem);
  });
  
  
  