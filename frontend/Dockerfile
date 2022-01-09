FROM node:alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache libc6-compat

WORKDIR /app

ARG STATIC_URL
ENV STATIC_URL $STATIC_URL
ARG SERVICE_URL
ENV SERVICE_URL $SERVICE_URL

ENV NODE_ENV production

COPY . .

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install --production=false # force to add some dev dependencies, or remix will not be installed
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]