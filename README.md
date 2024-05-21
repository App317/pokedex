<p align="center">
<img height="250px" width="250px" src="https://github.com/App317/pokedex/assets/101300095/effe0992-194f-41f0-99ad-8e3cc1ba5ba4">
</p>


<div align="center"> 
  <h1 href="https://app317.github.io/pokedex/">Pokedex</h1>
    <p>Powered by <a href="https://www.npmjs.com/package/axios">Axios</a> and <a href="https://pokeapi.co">PokeAPI</a></p>
</div>


## Link to Webpage

https://app317.github.io/pokedex/


## Acknowledgements

[Pokedex icons created by Roundicons Premium](https://www.flaticon.com/free-icons/pokedex)



## Features

- Contains every Pokemon!
- Cycle through Pokemon using the previous and next buttons.
- Click to see info on a specific Pokemon!
- Display a Pokemon's abilities, and stats!


## API Reference

#### Get url from Axios

```javascript
  axios.get(url)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | Fetches url from API



#### const response = await axios.get(url);


## Documentation
### Main.jsx
```javascript
const getPokeData = async (response) => {
    const pokemonPromises = response.map((query) => axios.get(query.url));
    return await Promise.all(pokemonPromises);
  };
```
`getPokeData` is our big asynchronous call inside Main.jsx! This maps the urls that's provided from the response array to axios GET the requests, then returns it all as a promise once the data is fetched from axios.

```javascript
  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const response = await axios.get(url);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      setPokeData(await getPokeData(response.data.results));
      setLoading(false);
    };
    pokeFun();
  }, [url]);
```
This useEffect hook inside Main.jsx does the following:
- Sets loading state to `true`
- The response variable fetches data from the specified `url`
- Updates `nextUrl` and `prevUrl` for pagination
- Uses the previously mentioned `getPokeData` to fetch Pokémon data and sets it useState
- Sets loading state to `false` once the data fetch is complete


```javascript
const Card = ({ pokemon, loading, infoPokemon }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCard(item.id);
    infoPokemon(item);
  };
```
Card.jsx is what displays the list of Pokémon cards. It uses the `handleCardClick` function in order to track what card has been selected and relays the Pokémon's info with `infoPokemon`.
```javascript
    <Card
        pokemon={pokeData}
        loading={loading}
        infoPokemon={(poke) => setPokeDex(poke)}
    />
    <PokeInfo data={pokeDex} />
```

## Roadmap
- Update CSS in more areas

- Add types to PokeInfo (grass,fire,etc.)

- Animation on changing pokemon info data (when you select another card)

- Add a progress bar for each of the stats, showing how high each stat goes

- Make the PokeInfo Background change color depending on the typing
