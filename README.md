# LoadingStrategyRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## What we covered
* Lazy Loading 
* Routing
* WildCard Routing
* 
* Pass data by URL (path:'setpassword/:userId/:city',)
* URL (localhost:4200/account/setpassword/1/Gwalior)
* Get data by url this.route.params.subscribe
* Link [routerLink]="[setPasswordLink, userId, userCity]"
* router.navigate(['account/setpassword', this.userId, this.userCity]);
* 
* this.route.snapshot.paramMap.get('prevRoute') (Note:- route: ActivatedRoute)
* this.route.snapshot.params['prevRoute'] (Note:- route: ActivatedRoute)
* this.route.params.subscribe (Note:- route: ActivatedRoute)
* 
* Pass data from routing.module (Note:- data: {link: 'SIGNUP URL'})
* Get data which pass by routing.module route.data.subscribe (Note:- route: ActivatedRoute)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
