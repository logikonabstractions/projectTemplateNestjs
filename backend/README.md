# About

A nestjs/react template to dev & run locally using docker-compose

# Usage
* `docker-compose up` from project root (`./fullStackProjectTemplate`)
* visit `locahost:3000`
* it serves whatever is in `./fullStackProjectTemplate/frontend/build/index.html`

To properly use this, run `npm run build` from `./fullStackProjectTemplate/frontend`. This will make
a production build in /frontend/build, and thus be served directly by nestjs. Allowing to prototype/test

# Improvements
* manage /frontend as a submodule