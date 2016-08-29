# aurelia-cli-materialize-bridge


### log

##### init project

- sudo npm install aurelia-cli -g
- au new aurelia-cli-materialize-bridge
  - 2. Default TypeScript
  - 1. Yes (create project)
  - 1. Yes (install all dependencies)
- cd aurelia-cli-materialize-bridge

- push to github and create new branch

##### create materialize-css amd module

- npm install requirejs materialize-css --save-dev
- add [rbuild.js](rbuild.js) and [materialize-css.js](materialize-css.js)
- ./node_modules/.bin/r.js -o rbuild.js

##### install aurelia-materialize-bridge

- npm install aurelia-validation --save  (??)

- npm install aurelia-materialize-bridge --save
  - or until this [pull request](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/pull/238) fixes waves effect:
  - npm install github:ullfis/aurelia-materialize-bridge#build-branch --save

##### edit aurelia_project/aurelia.json

- set build loader plugins stub to false

```json
"loader": {
  "type": "require",
  "configTarget": "vendor-bundle.js",
  "includeBundleMetadataInConfig": "auto",
  "plugins": [
    {
      "name": "text",
      "extensions": [
        ".html",
        ".css"
      ],
      "stub": false
    }
  ]
},
 ```

- add this to bundles.dependencies:

```json
{
  "name": "jquery",
  "path": "../node_modules/jquery/dist",
  "main": "jquery.min"
},
{
  "name": "aurelia-validation",
  "path": "../node_modules/aurelia-validation/dist/amd",
  "main": "aurelia-validation"
},
{
  "name": "materialize-css",
  "path": "../node_modules/materialize-css/dist",
  "main": "js/materialize.amd",
  "deps": [
    "jquery"
  ],
  "resources": [
    "css/materialize.css"
  ]
},
{
  "name": "aurelia-materialize-bridge",
  "path": "../node_modules/aurelia-materialize-bridge/dist/amd",
  "main": "index",
  "deps": [
    "jquery"
  ],
  "resources": [
    "breadcrumbs/breadcrumbs.css",
    "breadcrumbs/breadcrumbs.html",
    "card/card.css",
    "card/card.html",
    "carousel/carousel-item.html",
    "carousel/carousel.css",
    "carousel/carousel.html",
    "checkbox/checkbox.html",
    "chip/chip.html",
    "collection/collection-header.css",
    "collection/collection-header.html",
    "collection/collection-item.css",
    "collection/collection-item.html",
    "collection/collection.html",
    "collection/md-collection-selector.css",
    "collection/md-collection-selector.html",
    "colors/md-colors.html",
    "dropdown/dropdown-element.html",
    "fab/fab.html",
    "file/file.html",
    "input/input.css",
    "input/input.html",
    "navbar/navbar.css",
    "navbar/navbar.html",
    "pagination/pagination.html",
    "progress/progress.html",
    "radio/radio.html",
    "range/range.html",
    "sidenav/sidenav.css",
    "sidenav/sidenav.html",
    "slider/slider.css",
    "switch/switch.css",
    "switch/switch.html",
    "well/md-well.html"
  ]
}
```

##### main.ts

```javascript
aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());
```

##### app.html
```html
<template>
  <require from="../node_modules/materialize-css/dist/css/materialize.css"></require>
```

```bash
au run
```
