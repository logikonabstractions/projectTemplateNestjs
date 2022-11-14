# about

# TODOs
* use envars to set URLs in react 
* react Dockerfile
* override runtime envars with docker-compose-dev?
* check cross-platform (currently linux tested only)
# ISSUES
## Windows....
* bind mount works FINE with the -dev.yaml version, however the hot reload for some reason doesn't. Works as expected on linux.

we should override envars from frontend/.env with docker-compose-dev.yml, because that would allow us to only have to touch the compose file to set the backend running on localhost vs within docker etc. 
 

# Usage

## dev setup - summary

**for now, you must still run `npm install && npm run build` from within /frontend to produce the /frontend/build/index.html which nestjs expects to be serving. This will ultimatley be automated.**

`docker-compose -f docker-compose-dev.yaml up`

* `localhost:3001/`: the react app with hot reload
* `localhost:3000/`: nestjs server whatever is under /frontend/build/index.html
* `localhost:8081/`: a db explorer for the mongo db running in the other container
* `localhost:27017/`: the mongo container port

### details
In general: 
* we use bind mounts for the code living on the host into the frontend/backend container.
  * this means that local changes on the host are reflected within the containers instantly:
    * `./frontend/` under `/home/app/node/frontend` in the `frontend:` service
    * `./backend/` under `/home/app/node/backend` iun the `backend:` service
    * `./frontend/build` under `/home/app/node/frontend/build` in the `backend:` service
* we use named docker volumes for data persistance 
  * `node_modules_frontend` for the `frontend:` service
  * `node_modules_backend` for the `backend:` service
  * `mongodb_data`:,  `mongodb_configs`: for the mongo container
* use defaults values as much as possible - e.g. default mongo port, nestjs port, etc.

Backend:
  * we always run `npm install` at startup, so that any chgs to packge.json (on host) will be taken into account:
    * npm install will install any new pckgs
    * those will be persisted in `node_modules_backend` volume


# GIT stuff (submodules)

## Create a subdmodule: 
```
git submodule add <GIT REPO URL> <path/to/submodule>
git add .
git commit
```
## cloning the parent git AND the submodule
```
git clone --recuse-submodules <REPO>
```

## pull upstream changes into submodule (from parent)
`git submodule update --remote --recursive`

## detached head stuff
If you work on both backend/frontend and thus commit/fetch with the submodule, you may end up in a `detached head` status (wrt to git). To be honest I always just end up on stack overflow and sort of figure it out. It's probably not that complicated, I just never took the time to understand it.

## Notes

* _**A submodule IS ALSO a git repo**_. So you can do everything within the submodule as if it was a standalone git repo. It doesn't know/care that it is a submodule The submodule commands are mostly just convenience.
  
# Functionalities
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
```
[fv projectTemplateNestjs]$ tree -L 2
.
├── backend
│   ├── configs.ts
│   ├── dist
│   ├── docker-compose.yaml
│   ├── Dockerfile
│   ├── nest-cli.json
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   ├── test
│   ├── tsconfig.build.json
│   └── tsconfig.json
├── docker-compose-dev.yaml
├── docker-compose.yaml
├── frontend
│   ├── build
│   ├── Dockerfile
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── README.md
│   ├── src
│   ├── startup.sh
│   └── tsconfig.json
├── Makefile
├── node_modules
└── README.md
```
# Improvements/stuff that would be nice to implt.
1. ~~a [bind mount](https://docs.docker.com/storage/bind-mounts/) for the nestjs code (so that we can do hot reload with docker)~~
2. some auto build for react (now have to do manually)
3. a container serving react in dev/debug mode, with hot reload
4. 

