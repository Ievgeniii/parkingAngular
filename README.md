# Parking

# To run this application type in the CLI next: 
# •	npm install
# •	ng serve –open or npm start
# How application works:
# •	app.component.ts is using parking.service.ts’s ajax get method and subsribes to result. On result app.component.ts creates an array of data in the parking.service.ts and binds its internal array to that data. By the length of the array app.component.ts creates DIVs and puts parking-garages.component.ts into them.
# •	parking-garages.component.ts checks the received information and outputs the result thereafter.
# •	parking-garage-details.component.ts is for outputting map after clicking on the exact parking garage. It receives necessary data by subscribing to event occurred after that clicking and sent via parking.service.ts. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
