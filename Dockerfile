FROM node:8.11-alpine

LABEL maintainer="S-Kazuki<contact@revoneo.com>"

ENV APP_ROOT=/usr/src/node \
TZ=Asia/Tokyo

WORKDIR $APP_ROOT

COPY package.json $APP_ROOT

RUN apk update \
&& apk add multitail tzdata \
&& cp /usr/share/zoneinfo/$TZ /etc/localtime \
&& echo $TZ> /etc/timezone \
&& npm update \
&& npm cache clean --force \
&& rm -rf /var/cache/apk/*

COPY . $APP_ROOT

CMD ["npm", "start"]
