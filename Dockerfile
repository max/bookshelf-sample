FROM gcr.io/gae-runtimes/nodejs8:stable

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install

EXPOSE $PORT
