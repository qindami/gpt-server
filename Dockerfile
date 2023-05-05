FROM node:lts-alpine AS frontend

RUN npm install pnpm -g

WORKDIR /app

COPY ./package.json /app

RUN pnpm install

COPY . /app

EXPOSE 3000

CMD ["node", "app"]
