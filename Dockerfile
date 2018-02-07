FROM node:9.4

ADD ./index.js /root/index.js
ADD ./package.json /root/package.json
ADD ./server /root/server
ADD ./public /root/public

WORKDIR /root

CMD npm install ; npm run start
