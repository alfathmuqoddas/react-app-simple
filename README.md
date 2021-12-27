# React App Simplified
smaller create-react-app
`git clone`, `npm install` and start by `npm start`

## run with docker!

Build and run development image for docker:
- `$ docker build -t react-app-simple:dev`
- `$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    react-app-simple:dev`
- Start developing and the look at app hot-reloading thanks to `-e CHOKIDAR_USERPOLLING=true`
- Open `localhost:3000` at host
