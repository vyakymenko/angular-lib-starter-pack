# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/vyakymenko/angular-lib-starter-pack.svg)](https://greenkeeper.io/)
[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

[![Build Status](https://travis-ci.org/vyakymenko/angular-lib-starter-pack.svg?branch=master)](https://travis-ci.org/vyakymenko/angular-lib-starter-pack)
[![GitHub version](https://badge.fury.io/gh/vyakymenko%2Fangular-lib-starter-pack.svg)](https://badge.fury.io/gh/vyakymenko%2Fangular-lib-starter-pack)
[![devDependencies Status](https://david-dm.org/vyakymenko/angular-lib-starter-pack/dev-status.svg)](https://david-dm.org/vyakymenko/angular-lib-starter-pack?type=dev)
[![peerDependencies Status](https://david-dm.org/vyakymenko/angular-lib-starter-pack/peer-status.svg)](https://david-dm.org/vyakymenko/angular-lib-starter-pack?type=peer)

Angular Starter Lib Pack For Angular 2 (and beyond) Libraries

`angular-lib-starter-pack`

# Current Version
5.2.4

# Quick Start
```bash
# Clone
$ git clone https://github.com/vyakymenko/angular-lib-starter-pack.git

# Go to repository folder
$ cd angular-lib-starter-pack

# Install
$ npm install

# Build your awesome library
$ npm run build

# Publish your package
$ npm publish # WARNING: Don't forget to modify your package.json before publishing
```

# Out of the box
- **AOT/JIT/UMD Compatible**
- **Continuous Integration** supported by [Travis CI](https://travis-ci.org/)
- **Automate your npm dependency management** supported by [Greenkeeper](https://greenkeeper.io/)
- **Automatically generated documentation** supported by [Compodoc](https://github.com/compodoc/compodoc)
- **Static code analysis** supported by [Codelyzer](https://github.com/mgechev/codelyzer) and [TSLint](https://palantir.github.io/tslint/)
- **Analyze and debug your library** with [Sourcemap Explorer](https://www.npmjs.com/package/source-map-explorer) 
- *Test your library (In development)*
- *Run E2E tests for your library (In development)*

# Start Development your Angular Library

 - In `webpack.umd.config.ts` replace `library: hello-world` to new of your new library.
 - In `src/` directory rename your file to `your-awesome-library.module.ts`.
 - In `your-awesome-library.module.ts` don't forget to update module name per [Angular Style Guide](https://angular.io/guide/styleguide) to `YourAwesomeLibraryModule`.
 - After we need to configure our `package.json`
 - In `package.json` configure fields like `name`, `version`, `keywords`, `description` etc. More details you can reed [here](https://docs.npmjs.com/files/package.json).
 - **Note** Your library must have `index.ts` file as an entry point for further building.
 
# Commands List
#### Build
 - `$ npm run build` - building AOT/JIT and UMD bundle.
 - `$ npm run build:watch` - building AOT/JIT and UMD bundle in watch-mode.
#### Target Build
 - `$ npm run build:esm` - building AOT/JIT.
 - `$ npm run build:esm:watch` - building AOT/JIT in watch-mode.
 - `$ npm run build:umd` - building UMD bundle.
 - `$ npm run build:umd:watch` - building UMD bundle in watch-mode.
####  Lint
 - `$ npm run lint` - lint your TypeScript files.
#### Source Maps Explorer
 - `$ npm run explore` - explore your library sources.
#### Documentation
 - `$ npm run docs` - generating local documentation.
 - `$ npm run gh-pages` - generating documentation and uploading it to GitHub Pages.
#### Publish library to NPM
 - `$ npm publish` - publish your library sources on [npmjs.com](https://www.npmjs.com/). After publishing library will be available in [npm packages](https://www.npmjs.com/package/angular-lib-starter-pack).
 - *NOTE:* `prepublishOnly` script will automatically run and build your library before publishing.
#### Clean
 - `$ npm clean` - clean up all temporary files. 
 
# Test your library with [Angular-CLI](https://cli.angular.io)
 - If you don't have it `npm install -g @angular/cli`.
 - Generate angular project with `ng new LibraryTestProject`.
 - Go to your test project `cd LibraryTestProject`.
 - Install you awesome library `npm install your-awesome-library`.
 - Inside Angular application import `YourAwesomeModule` and use you library:
 ```ts
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   
   import { YourAwesomeModule } from 'your-awesome-library';
   
   import { AppComponent } from './app.component';
   
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       YourAwesomeModule,
       BrowserModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
  ```

# Test your library with [Angular Seed](https://github.com/mgechev/angular-seed) or [Angular Seed Express](https://github.com/vyakymenko/angular-seed-express)
 - After clone angular-seed let's config our project:
 - In `project.config.ts` configure:
 ```ts 
     ...
 
     // Add packages (e.g. ng2-translate)
     const additionalPackages: ExtendPackages[] = [
       {
       name: 'angular-lib-starter-pack',
       // Path to the package's bundle
       path: 'node_modules/angular-lib-starter-pack/dist/index.umd.js'
     }
     ];
 
     this.addPackagesBundles(additionalPackages);
     
     ...
 ```
  - Inside Angular application import `YourAwesomeModule` and use you library:
  ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    
    import { YourAwesomeModule } from 'your-awesome-library';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        YourAwesomeModule,
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
   ```
 
# TODO
 - Unit Testing
 - E2E Testing

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# License

MIT

