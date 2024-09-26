# MESA GitHub Pages Landing Page

https://mesastar.org

page created by: Philip Mocz (2024)

Uses https://github.com/thieryw/gitlanding React components

Starts from demo project files: https://github.com/garronej/gitlanding-demo

## How the website was set up

```console
yarn create react-app . --template gitlanding

git add -A
git commit -m "Initial commit"
git push
```

Fix React Router issue to be compatible with GitHub pages:
https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages


Follow guide from https://github.com/gitname/react-gh-pages

Add a `homepage` property to the `package.json` file

In `package.json` 
Add a `predeploy` property and a `deploy` property to the scripts object:

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Push the React app to the GitHub repository

```console
npm run deploy
```