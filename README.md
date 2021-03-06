<p align="center">
    <img src="https://i.imgur.com/bF1WkFW.png" width="300">
</p>

[![NPM Version][npm-badge]][npm-url]
[![Node JS][node-badge]][node-url]
[![Angular JS][angular-badge]][angular-url]
[![License][license-badge]][license-url]

# Site
![photosfirebase angularjs](https://i.imgur.com/LoFcIev.png)
![photosfirebase angularjs 1](https://i.imgur.com/ldj3rgH.png)

# Install dependences
in ```photosfirebase-angularjs/```

```bash
npm install
```
or
```bash
yarn install
```

***

# PhotosfirebaseAngularjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

***
# Create component without .spec and .css (--skip-tests -is)
```javascript
ng generate component components/photos --skip-tests -is
```
or
```javascript
ng g c components/photos --skip-tests -is
```

# Create service without file .spec (--skip-tests)
```javascript
ng generate service services/loadImages --skip-tests
```
or
```javascript
ng g s services/loadImages --skip-tests
```

# Create directive without file .spec (--skip-tests)
```javascript
ng generate directive directives/ngDropFiles --skip-tests
```
or
```javascript
ng g d directives/ngDropFiles --skip-tests
```

# Create interface (add at file name '.interface.ts')
```javascript
ng generate interface interfaces/item
```
or
```javascript
ng g i interfaces/item
```

# Server local
install global ```sudo npm i -g http-server```

deploy in ```/photosfirebase-angularjs/dist/photosfirebase-angularjs/```

```javascript
http-server
```
or
```javascript
http-server -o
```

[npm-badge]: https://img.shields.io/badge/npm-v7.6.3-brightgreen
[npm-url]: https://www.npmjs.com
[node-badge]: https://img.shields.io/badge/nodejs-v14.16.0-brightgreen
[node-url]: https://nodejs.org/download/release/v12.16.1/
[angular-badge]: https://img.shields.io/badge/angular--CLI-v11.2.4-brightgreen
[angular-url]: https://angular.io/cli/
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: https://opensource.org/licenses/MIT
