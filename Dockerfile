FROM node:9.5

WORKDIR /root

ADD ./index.js /root/index.js
ADD ./package.json /root/package.json
ADD ./.babelrc /root/.babelrc
ADD ./server /root/server
ADD ./src /root/src

CMD npm install ; npm run build ; npm run server
