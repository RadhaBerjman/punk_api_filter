const containerBeers = document.querySelector('#container_beers');
const btnLow = document.querySelector('#btn-low');
const btnMd = document.querySelector('#btn-md');
const btnHg = document.querySelector('#btn-hg');
const btnAll = document.querySelector('#btn-all');

const renderCards = (beers) => {
  const html = beers
    .map((beer) => {
      return `<div class="card">
<h2>${beer.name} - ${beer.abv}</h2>
<img
  src="${beer.image_url}"
  alt="beer"
  height="180"
/>
<p class="card__description">
${beer.description}
</p>
</div>`;
    })
    .join('');
  containerBeers.innerHTML = html;
};

const getBeers = (min=0,max=100) => {
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=${min}&abv_lt=${max}`)
    .then((response) => response.json())
    .then((data) => renderCards(data));
  }
  
  getBeers();
  btnLow.addEventListener('click', () =>{
    getBeers(0,5)
  })
  btnMd.addEventListener('click', () =>{
    getBeers(5,7.5)
  })
  btnHg.addEventListener('click', () =>{
    getBeers(7.5,50)
  })
  btnAll.addEventListener('click', () =>{
    getBeers()
  })
  