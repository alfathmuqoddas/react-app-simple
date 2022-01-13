# pull official base image
FROM node:fermium-alpine3.15

# set workin directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dep
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
