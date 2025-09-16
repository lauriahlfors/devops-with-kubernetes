FROM node:24-alpine

WORKDIR /usr/src/devops-with-kubernetes/1.2/app

COPY ./ ./

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start"]
