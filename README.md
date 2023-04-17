Requirements:

Pokémon information must be retrieved from PokéAPI, which you should already be familiar with.
The Pokédex must display a list of Pokémon and support simple pagination (e.g. “next” and “previous” buttons to get the next/previous page of Pokémon), such that not all Pokémon are displayed at the same time.
When a user clicks on a specific Pokémon, additional information about that Pokémon must be displayed. E.g. type(s), stats, abiltities, height and weight.
The application must contain multiple pages (e.g. "pokedex" and "about") and utilize React Router to route between them.
The application must be developed using the Create React App toolchain.
Feel free to expand on the requirements.

Handin instructions:

Your Pokédex must be hosted on Github Pages. Follow this guide for instructions on how to deploy your React App.
On itslearning, hand in a link.txt file containing the link to your Pokedex hosted on GitHub Pages.
The assignment can be developed alone or in groups of 2-4 and is evaluated on an approved/not approved basis. It must be approved in order to attend the course exam.

Display hints...
Before writing any code, consider making a sketch of your UI and split it into React components using the approach described in the article "Thinking in React".

This previous exercise should give you a good idea of how to fetch data from the PokeAPI.

For pagination, you can apply "limit" and "offset" query parameters to the endpoint, e.g: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0". This specific query will return the 20 first pokemon. To get a specific page, change the offset to limit * pageNumber.

For routing to work on Github Pages, make sure you are using createHashRouter instead of createBrowserRouter [more info].

https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
