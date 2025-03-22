# Pokémon Data App

This is a web application that fetches Pokémon data from an API and displays it on the front-end. The data is paginated for performance optimization. Additionally, a new feature allows users to create a list of their favorite Pokémon.

## Demo

You can view the live demo of the application [here](https://pokedex-gamma-orpin-80.vercel.app/).

## Clone the repository

To clone this project, run the following command:

```bash
git clone git@github.com:dianakosta1985/pokedex.git
```

### Prerequisites

Make sure you have the following installed:

- Docker

- Node.js (if you're running the project locally)

### Docker

To run this project in Docker, follow these steps:

- Build image: `docker build -t pokedex .`
- Run image: `docker run -p 5173:5137 --name pokedex-container pokedex`

The application will now be available at http://localhost:5137

### Development Choices:

- FE Approach: JS vanilla & SCSS.

- Pokemon Search Optimization: I implemented debounce to improve the performance of the Pokémon search functionality, even though the search is implemented on the client side.
- State Managment tool is Zustand
- Pagination Component and "useSearch" hook were taken from my past projects

### Assumptions

- The number of Pokémon remains relatively stable over time, with an estimated total of around 1,300 Pokémon.

### Features

- Favorite Pokémon List: Users can select Pokémon and add them to their favorite list for easy access.

### Pagination

Due to the large dataset (1300 Pokémon records), pagination is implemented client-side to prevent performance issues. In the future server api with search capabilities could be explored.

### Helpful Resources

#### Pick Color from PDF:

    I relied on a helpful resource to enable color extraction from PDFs for UI customization.

#### Google Material Icons:

I incorporated Google Material Icons into the app to provide a rich set of customizable icons for a consistent and polished user interface.

### To Do

- implement favorites with local Storage
- Implement server-side search functionality for better data management and than I could implement pagination with server side API
