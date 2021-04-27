FROM node:10.13.0
RUN mkdir usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@latest
COPY . .
EXPOSE 4200
CMD npm start