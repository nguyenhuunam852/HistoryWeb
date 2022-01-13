FROM node:17-alpine AS backend

# Install PM2
RUN npm install -g pm2

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# create user with no password
RUN adduser node root

# Copy existing application directory contents
WORKDIR /usr/src/app

COPY . /usr/src/app

# install and cache app dependencies
COPY package*.json /usr/src/app/

# grant a permission to the application

RUN chmod -R 775 /usr/src/app
RUN chown -R node:root /usr/src/app

# clear application caching
RUN npm cache clean --force

# install all dependencies
USER 1000
RUN npm install 
RUN npm run migration:run

EXPOSE 5000

CMD [ "npm", "run", "build:dev" ]