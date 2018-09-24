FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install ruby and sass
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby ruby-dev
RUN gem install sass

# Update npm
RUN npm i npm@latest -g

# Install Bower & Grunt
RUN npm install -g bower grunt-cli

# Install application libraries.
RUN npm install

RUN bower install --allow-root

EXPOSE 3000

CMD [ "npm", "start" ]
