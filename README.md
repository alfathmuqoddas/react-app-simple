# React App Docker Images
React app with docker image support, so you can deploy it anywhere
`git clone`, `npm install` and start by `npm start`

## Build and run with docker!

Build and run development image for docker:
- `$ docker build -t react-app-simple:dev .`
- `$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true react-app-simple:dev`
- Open `localhost:3001`
- Start developing and the look at app hot-reloading thanks to `-e CHOKIDAR_USERPOLLING=true`

Build and run production build:
- `$ docker build -f Dockerfile.prod -t react-app-simple:prod .`
- `$ docker run -it --rm -p 1337:80 react-app-simple:prod`


