FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Update npm
RUN npm i npm@latest -g

# Install Sails JS 
RUN npm install sails -g

# Install application libraries.
RUN npm install

EXPOSE 1337

CMD [ "node", "app" ]