npx create-react-app .

npm install --save-dev prop-types

npm install --save-dev prettier husky lint-staged

npm i react-redux

<!-- add file -->

npm install modern-normalize import 'modern-normalize/modern-normalize.css';

<!-- to index.js -->

npm install node-sass --save

npm install react-router-dom

npm i shortid

npm install axios

<!--  deploy on git -->

npm run build "homepage": "https://SerhiiDykyi.github.io/my-app", npm run build

npm install --save gh-pages

<!-- scripts add -->

"predeploy": "npm run build", "deploy": "gh-pages -d build"

npm run deploy

<!-- deploy on netlify -->

add netlify.toml

npm install netlify-cli -g

netlify login

<!-- scripts add -->

"predeploy": "npm run build", "deploy": "netlify deploy -p"

npm run deploy

netlify open --site

<!-- rename wiilMount -->

npx react-codemod rename-unsafe-lifecycles
