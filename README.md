# NgSnowpack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Initialize project

```
npx @angular/cli new ng-snowpack --skip-install
```

## Add script commands
```
package.json > scripts

    "postinstall": "ngcc && snowpack",
    "snowpack": "snowpack",
    "ngc": "ngc --outDir ./dist/out-ngc",
    "tsc": "tsc",
    "clean": "rm -rf dist build",
    "reset": "rm -rf dist build web_modules node_modules yarn.lock",
```

## Install dependencies

```
yarn
```

## Execute script commands

`yarn build`
- build app for production with Angular cli into `/dist/ng-snowpack`

`yarn tsc`
- compile code with typescript compiler cli into `/dist/out-tsc`

`yarn ngc`
- compile code with Angular's compiler cli into `/dist/out-ngc`

`yarn snowpack build`
- compile code with snowpack into `/build/_dist_/`

`yarn snowpack dev`
- serve app with snowpack
