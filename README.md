# Getting Started with React Todo App

This project was developed with [Material UI Design System](https://mui.com/es/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

### `yarn e2e`

Launches End 2 End test with **Cypress**

### `yarn storybook`

Open the documentation with **Storybook**

## Docker(optional)

### `yarn dev`

Run the project on develop mode

### `yarn prod`

Build and run the project on production mode [http://localhost:80](http://localhost:80)

## Project structure

### Test

Folder where all unit tests are located

```bash
src/__tests__
```

### Components

Generic components

```bash
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

```bash
src/environment
```

### Hooks

```bash
src/hooks
```

### Models

```bash
src/models
```

### Pages

- `Home` is the main page of the application.

```bash
src
└── pages
   └── home
       └── features
           ├── Todo
           ├── TodoForm
           └── TodoList
```

### Services

8base services configuration

```bash
└── services
    ├── aws
    └── graphql
```

### Stories

Component Documentation and stories

```bash
stories
```
