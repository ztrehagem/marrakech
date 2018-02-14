FROM node:9.5

WORKDIR /root

ADD ./index.js /root/index.js
ADD ./package.json /root/package.json
ADD ./server /root/server
ADD ./node_modules /root/node_modules
ADD ./public /root/public

CMD npm run server
