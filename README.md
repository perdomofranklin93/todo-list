# Getting Started with React Todo App

This project was developed with [Material UI](https://mui.com/es/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

### `yarn e2e`

Launches End 2 End test with **Cypress**

### `yarn storybook`

Open the documentation with **Storybook**

## Project structure

### Test

Folder where all unit tests are located
```
src/__tests__
```

### Components
Generic components
```
src/
└── components
    ├── atoms
    ├── molecules
    │   ├── headers
    │   └── snackbars
    └── organisms
```
### Environment

Project environment variables
```
src/environment
```

### Hooks
```
src/hooks
```

### Models
```
src/models
```
### Pages

- `Home` is the main page of the application.
- `Login` for now unnecessary with the aws service.
- `routes` lazy load modules and routes.

```
src
└── pages
   ├── home
   │   └── features
   │       ├── Todo
   │       ├── TodoForm
   │       └── TodoList
   ├── login
   └── routers
```
### Resolvers
For now deprecated
### Services

8base services configuration

```
└── services
    ├── aws
    └── graphql
```

### Stories
Component Documentation and stories
```
src/stories
```