FROM node:9.5

WORKDIR /app

ADD ./package.json /app/package.json
ADD ./package-lock.json /app/package-lock.json
ADD ./.babelrc /app/.babelrc
ADD ./server /app/server
ADD ./src /app/src

RUN npm install
RUN npm run build
RUN rm -r src
RUN rm .babelrc
RUN npm prune --production

CMD npm run server
