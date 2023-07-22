FROM node:16-alpine

WORKDIR usr/src/app

COPY ./build ./build

EXPOSE 5000

RUN npm install -g serve

CMD ["serve", "-s", "-l", "5000", "build"]
