#!/bin/bash

npm install
cargo build --release
wasm-pack build --release
node_modules/.bin/webpack --release
git switch gh-pages
git rm -rf *
mv dist/* .
git add .
git commit -m "deployed using deploy.sh script"
git push origin gh-pages
git switch master
