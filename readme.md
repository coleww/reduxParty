# REDUX-PARDY


A simple React + Redux implementation of Jeopardy

App skeleton based off of [Learn Redux](https://learnredux.com)


## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.



# TODO:

- [make separate host/board tabs, pass data along via LS](https://medium.com/@Scarysize/syncing-redux-stores-across-browser-tabs-fff04f975423#.yvy3pg6is)
- ALWAYS persist current gamestate to localStorage, so that an accidental click can't ruin a game. (thus, also needs a "new game" button and such, and must be done in a way that won't mess up the host/board logic)
- [add ability to "undo" last scorekeeping assignment](https://github.com/omnidan/redux-undo)
- add option to pull random categories from jService (thunks or sagas?)
- add option to enter your own categories/answers/etc. && persist to localStorage and/or export as JSON
- ability to run multiple rounds, final jeopardy, etc.