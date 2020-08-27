FROM node:12-alpine

WORKDIR /app

COPY ./api .

RUN npm i -g @nestjs/cli

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]