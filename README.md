# Project Installation 

## Prerequisites 
Node.js needs to be installed on your computer in order to run the app.

## 1. Clone the repository
Clone the repository into your computer by writing `git clone https://github.com/mihail-soltan/reddit-aww.git` 
in the terminal

## 2. Install dependencies
Type cd `ng-reddit-aww` in your terminal and run `npm install` in order to install all the dependencies.

## 3. Run the app
Run the app by typing `ng serve -o` in the terminal 

### Project Description

When the project loads, a list of the first 25 posts from the subreddit r/aww is loaded. 
The posts are sorted by 'hot'. Scrolling to the end of the list will trigger another 25 
posts to load.In the upper left corner there's a hamburger menu button. Inside the menu there are  
22 subreddits available (subreddits with profanity in their names were filtered). 
When clicking on the subreddit, it will empty the previously retrieved
posts and return the first 25 posts. The infinite scrolling feature works for all the subreddit.
No external library or plugin was used. It was implented with the help of IntersectionObserver.
The app is responsive.
Each post has:
- a thumbnail if available (else the reddit logo is displayed) 
- a title (if clicked, it will redirect to another tab with the original post)
- full date when it was posted
- the name of the subreddit in which it was posted
----------------------------------------------------------------------------------------------------
# NgRedditAww

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

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
