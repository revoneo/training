FROM alpine:edge

COPY docker-entrypoint.sh /mongo/
COPY ./db /data/db

RUN chmod +x /mongo/docker-entrypoint.sh \
&& apk update \
&& apk add mongodb \
&& rm /usr/bin/mongoperf \
&& rm -rf /var/cache/apk/*

ENTRYPOINT [ "/mongo/docker-entrypoint.sh" ]

CMD [ "mongod", "--bind_ip", "0.0.0.0" ]
