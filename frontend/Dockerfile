FROM node:alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

ARG STATIC_URL
ENV STATIC_URL $STATIC_URL
ARG SERVICE_URL
ENV SERVICE_URL $SERVICE_URL

ENV NODE_ENV production

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

EXPOSE 3000

ENV PORT 3000

CMD ["node_modules/.bin/remix-serve", "start"]