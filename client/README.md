# PT platform

Testing UI functionality and API integration with [poc-pt-api](https://github.com/FredieU/poc-pt-api) through https://morning-reaches-32004.herokuapp.com/api.

The project also uses React components from a [custom component library](https://github.com/FredieU/shared-components) viewable on [components.funabia.com](https://components.funabia.com).

## Set up

Clone the project with `--recurse-submodules` to automatically initialise and update the `shared-components` submodule

```bash
git clone --recurse-submodules git@github.com:FredieU/pt-ui.git
```

If you've cloned normally without `--recurse-submodules`, you can initialise and update manually

```bash
git submodule update --init
```

Install the project dependencies with `npm` or `yarn`

```bash
npm install
```

---

## Run the project locally

Run the local development server with

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Unit tests

Launch the test runner in the interactive watch mode

```bash
npm test
```

See the CRA page about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

## Build for deployment

Build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm build
```

The build is minified and the filenames include the hashes.

Test the final build before deployment with `serve` (`sudo npm install -g serve`)

```bash
serve -s build
```

---

## Deploy

The project uses Firebase Hosting and manual deployment can be done with Firebase CLI.

```bash
npm install -g firebase-tools
```

```bash
firebase deploy
```
