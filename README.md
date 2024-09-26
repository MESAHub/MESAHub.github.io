.. image:: public/mesa-logo2-200.png
:align: center
:width: 200
:alt: MESA
:target: https://docs.mesastar.org/en/latest/

# MESA GitHub Pages Landing Page

https://mesastar.org

page created by: Philip Mocz (2024)

## Repository structure

-   The `main` branch contains the website source code
-   The `gh-pages` branch stores the built website

## Updating the website

A Github Action will automatically rebuild the website when changes are pushed to the repository.

The website may also manually be built by checking out the repo, and doing a

```console
yarn install
npm run deploy
```

## How the website was set up

Uses https://github.com/thieryw/gitlanding (v2) React components

Starts from demo template: https://github.com/garronej/gitlanding-demo

Follows guide on publishing React web apps to GitHub Pages from https://github.com/gitname/react-gh-pages

-   add a `homepage` property to the `package.json` file

-   also add a `predeploy` property and a `deploy` property to the `scripts` object:

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```
