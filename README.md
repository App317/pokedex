<p align="center">
<img height="250px" width="250px" src="https://github.com/App317/pokedex/assets/101300095/effe0992-194f-41f0-99ad-8e3cc1ba5ba4">
</p>


<div align="center"> 
  <h1 href="https://app317.github.io/pokedex/">Pokedex</h1>
    <p>Powered by <a href="https://www.npmjs.com/package/axios">Axios</a> and <a href="https://pokeapi.co">PokeAPI</a></p>
  <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Those Icons - Flaticon</a>
</div>

<h2 align="center">How it works</h2>
<p>
  This application contains all current Pokemon, displaying their abilities and stats when you click on their respective card. Each page contains 20 Pokemon that you can cycle with the previous and next buttons above the cards.
</p>

<h2 align="center">The code</h2>

<p>getPokeData is an asynchronous function that will map the urls that axios has gotten from PokeAPI, and will return them all as promises. This ensures it has all the correct urls before getting used inside setPokeData. setPokeData awaits for getPokeData to fetch the urls, and sets them to the response. Creating a response variable is also convient because it allows the application to keep track of what the current url is to make use of PokeAPI's resources with 'next' and 'previous' to create the buttons. </p>
