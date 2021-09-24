# FROM node:14-alpine

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# COPY package*.json ./

# RUN npm install
# RUN npm build --prod
# COPY . .

# EXPOSE 443
# CMD [ "node", "server.js" ]



FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm build --prod

COPY . .

EXPOSE 443

CMD [ "node", "server.js" ]