FROM node:24-alpine

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN --mount=type=cache,target=/root/.npm npm install

COPY app/ .

RUN npm run build

CMD ["npm", "run", "start"]
