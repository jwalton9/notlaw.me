FROM node:12 as staging

ADD . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:alpine

COPY --from=staging ./dist/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx" "-g", "daemon off"]
