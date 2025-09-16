FROM node:24-alpine

WORKDIR /usr/src/devops-with-kubernetes

COPY log_project ./log_project

WORKDIR /usr/src/devops-with-kubernetes/log_project

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start"]
