FROM node:11

MAINTAINER yixi

RUN mkdir -p /home/ldap
COPY . /home/ldap
WORKDIR /home/ldap
RUN npm install

EXPOSE 1389

CMD ["node", "index.js"]