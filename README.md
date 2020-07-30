# About
This is the webapp corresponding to [raw-validity](https://github.com/rustwasm/rust-webpack-template), a program checking validity of l-group formulas. Look at that repository for more information and try it out at [raw-bacon.github.io/raw-validity-webapp](https://raw-bacon.github.io/raw-validity-webapp/).


# Created using Webpack
This webapp was created using the [rust-webpack-template](https://github.com/rustwasm/rust-webpack-template), which is what you get by running 
```
mkdir my-project
cd my-project/
npm init rust-webpack
npm install
```

# Deploying to GitHub Pages
In the root of the master branch, run.
```
wasm-pack build
npm install
node_modules/.bin/webpack
```
You can add also add `--release` to `wasm-pack build` and `webpack` if you want. Then copy the contents of the `dist` folder into the root of the `gh-pages` branch:
```
git switch gh-pages
git rm *.js *.wasm README.md index.html
mv dist/* .
rm -r -f target node_modules
git add .
git commit -m "deployed changes"
git push origin gh-pages
```
Don't forget to `git switch master` at the end!
