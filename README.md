# CRUD GRAPHQL API

This is a CRUD GRAPHQL API implemented in TypeScript & PostgresQL using TypeOrm

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build && npm start
```

### Project Features

```
- Movie
  - Get all movies
  - Get one movie
  - Add a movie
  - Update a movie
  - Delete a movie

```

### Types :

```graphql
scalar DateTime

type Movie {
  actors: [String!]!
  createdAt: DateTime!
  description: String!
  id: Float!
  releaseYear: String!
  title: String!
  updatedAt: DateTime!
}
```

### Mutations :

```graphql
type Mutation {
  addMovie(MovieInput: CreateMovieInput!): Movie!
  deleteMovie(id: Float!): Boolean!
  updateMovie(MovieInput: UpdateMovieInput!, id: Float!): Movie!
}
```

### Queries :

```graphql
type Query {
  getMovie(id: Float!): Movie
  getMovies: [Movie!]
}
```

### Inputs :

```graphql
input UpdateMovieInput {
  actors: [String!]
  description: String
  releaseYear: String
  title: String
}
```

```graphql
input CreateMovieInput {
  actors: [String!]!
  description: String!
  releaseYear: String
  title: String!
}
```

```
graph-ts-api
├─ src
│  ├─ database
│  │  ├─ entity
│  │  │  └─ Movie.ts
│  │  ├─ index.ts
│  │  ├─ migrations
│  │  │  └─ 1615219775175-MovieTable.ts
│  │  └─ services
│  │     └─ movieService.ts
│  ├─ index.ts
│  ├─ resolvers
│  │  └─ movie.ts
│  └─ schema
│     └─ movie.ts
└─ tsconfig.json
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ ormconfig.ts
├─ package.json
├─ README.md
├─ schema.gql
```
