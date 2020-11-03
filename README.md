# Tesonet home task

## Project start

- `npm i` install all dependencies
- `npm start` start the dev server
- login with credentials username `tesonet` and password `partyanimal` 

## Npm scripts

- `npm test` - to run the tests
- `npm start` - to start the dev server
- `npm run build` - to build project in to `dist` directory
- `npm run lint` - to lint for style errors

## About the task

- Design made on the go, just tried to make it UX friendly and responsive
- For images used `png` and `svg`
- For styles mostly used `Tailwindcss` with some `scss` additions
- Most of the code (where possible) written in `es6` syntax
- For state management, mostly used react `useState` and hold most of the state inside the hooks, but also added `redux` to show that I know the basics of it ;)
- Routing handled by `react-router-dom`, components also check for certain conditions and redirect when needed, for example is user tries to see Servers list but is not logged in
- Authorisation implemented with provided endpoint, token being saved in local storage, application watches for token expiration, also, token persists throughout the sessions, on logout it is cleared
- Old browser support handled
- Input fields validated
- Errors handled (not perfect)
- Written some tests
- Everything served and built with `webpack`
