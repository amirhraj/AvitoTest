FROM node:21.6.1

RUN npx -y playwright@1.43.0 install --with-deps

COPY test.js /Less_two/

CMD [ "npx", "playwright", "test" ]