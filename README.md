# Proof of concept API

Proof of concept RESTful API with JWT authentication and example private routes

## Set up

Clone the project with `--recurse-submodules` to automatically initialise and update the `client` submodule and the `shared-components` submodule within it

```bash
git clone --recurse-submodules [GIT_CLONE_URL]
```

If you've cloned normally without `--recurse-submodules`, you can initialise and update manually.

Do this from the root of this project as well as from within the `client` directory to update the `shared-components` submodule within it

```bash
git submodule update --init
```

Install the project dependencies with `npm` or `yarn` on both the root repo and the `client` submodule

```bash
npm install
```

---

## Run locally

Run the API from the root of the repo

```bash
npm run start:dev
```

and run the UI server from the `client` repo

```bash
npm start
```
