# About
This is the webapp corresponding to [raw-validity](https://github.com/rustwasm/rust-webpack-template), a program checking validity of l-group formulas. Look at that repository for more information and try it out at [raw-bacon.github.io/raw-validity-webapp](https://raw-bacon.github.io/raw-validity-webapp/).

# Creating a Rust webapp
This webapp was created using the [rust-webpack-template](https://github.com/rustwasm/rust-webpack-template), which is what you get by running 
```
mkdir my-project
cd my-project/
npm init rust-webpack
```

# How to deploy this
In the root of the master branch, run.
```
npm install
cargo build --release
wasm-pack build --release
node_modules/.bin/webpack --release
```
Then
```
git switch gh-pages
git rm -rf *
mv dist/* .
git add .
git commit -m "deployed using deploy.sh script"
git push origin gh-pages
```
Don't forget to
```
git switch master
```
at the end!