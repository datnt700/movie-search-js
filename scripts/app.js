const textInput = document.querySelector('.text-input');
const poster = document.querySelector('.poster');
const title = document.querySelector('.name');
const description = document.querySelector('.description');
const director = document.querySelector('.director');
const tag = document.querySelector('.tag');
const writer = document.querySelector('.writer');
const star = document.querySelector('.star');
const rating = document.querySelector('.rating');
const image = document.querySelector('.image');
const card = document.querySelector('.card');
const errors = document.querySelector('.error');

textInput.addEventListener('change', function handleFetch() {
  fetch(`http://www.omdbapi.com/?t=${textInput.value}&apikey=5a86865a`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Error) {
        console.log('hello');
        errors.style.display = 'block';
        card.style.display = 'none';
        image.style.display = 'none';
        return;
      }
      errors.style.display = 'none';

      card.style.display = 'flex';
      image.style.display = 'block';
      poster.src = data.Poster;
      title.innerText = data.Title;
      tag.innerHTML = '';
      data.Genre.split(',').forEach((element) => {
        const span = document.createElement('span');
        span.innerHTML = element.trim();
        tag.appendChild(span);
      });
      description.innerText = data.Plot;
      director.innerHTML = `Director: <span>${data.Director}</span></p>`;
      writer.innerHTML = `Writer: <span>${data.Writer}</span></p>`;
      star.innerHTML = `Writer: <span>${data.Actors}</span></p>`;
      rating.innerHTML = `IMDB Rating: <span>${data.imdbRating} </span> (${data.imdbVotes} votes) </p>`;
    })
    .catch((error) => {
      console.log('se', error);
    });
});
