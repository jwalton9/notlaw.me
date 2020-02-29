FROM node:12-alpine as deps

WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile --network-timeout 100000

FROM deps as stage

RUN yarn install --frozen-lockfile --network-timeout 100000

ADD . .
RUN yarn build

FROM node:12-alpine

COPY --from=deps /app/node_modules ./node_modules
COPY --from=stage /app/.next ./.next
COPY --from=stage /app/public ./public
COPY --from=stage /app/package.json ./package.json

CMD ["yarn", "start"]
