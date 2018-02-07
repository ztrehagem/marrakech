FROM node:9.4

ADD ./server /root/
WORKDIR /root

CMD node index.js
