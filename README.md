# about

## Usage
1. build react app (`npm run build` from `/frontend`) if not already built
2. `docker-compose up` from template root (`/projectTemplateNestjs`)
3.  goto `localhost:3000` for the react UI & `localhost:8081` for the db admin site.

## docker stuff
* `docker-compose up --build --force-recreate` may be an option if you edit the code in `/backend`. If you make changes in the code, make sure you're running the Docker image/container you think you are.

## github stuff (submodules)

### Create a subdmodule: 
```
git submodule add <GIT REPO URL> <path/to/submodule>
git add .
git commit
```
### cloning the parent git AND the submodule
```
git clone --recuse-submodules <REPO>
```

### pull upstream changes into submodule (from parent)
`git submodule update --remote --recursive`

### detached head stuff
If you work on both backend/frontend and thus commit/fetch with the submodule, you may end up in a `detached head` status (wrt to git). To be honest I always just end up on stack overflow and sort of figure it out. It's probably not that complicated, I just never took the time to understand it.

### Notes

* _**A submodule IS ALSO a git repo**_. So you can do everything within the submodule as if it was a standalone git repo. It doesn't know/care that it is a submodule The submodule commands are mostly just convenience.

# details

## Components
* `docker-compose up` to spin everything up on `localhost:3000`
* 3 docker containers:
    * mongodb
    * mongo-express
    * nestjs server
* `/frontend` that contains the frontend (react)
  
## Functionalities
* serving the `/build/index.html` (the react build file) on `localhost:3000` with `nestjs`
* a connected `react` app to a `mongodb` instance (via a `nestjs` api)
* saving a react form into the db
* serves db admin functionalities (mongo-express) in a browser at `localhost:8081`
* manages the frontend stuff as a submodule.
* persistant mongodb data via a [docker volumes](https://docs.docker.com/storage/volumes/)
* in terms of application
  * GET, POST, PATCH, DELETE requests in nestjs
  * typescript (react and nestjs)
  * 

# structure
* the template has a main directory with `docker-compose.yml`, hosting the app as a whole
* `/backend` contains the `nestjs` server code
* `/frontend` the `react` (or whatever else) UI

# Improvements/stuff that would be nice to implt.
1. a [bind mount](https://docs.docker.com/storage/bind-mounts/) for the nestjs code (so that we can do hot reload with docker)
2. some auto build for react (now have to do manually)
3. a container serving react in dev/debug mode, with hot reload
4. 

