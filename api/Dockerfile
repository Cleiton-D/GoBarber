FROM node:alpine
WORKDIR /usr/app

COPY package.json .
# RUN yarn install --production


# COPY .env .
COPY ormconfig.js .
RUN mkdir tmp

COPY dist ./dist
COPY node_modules ./node_modules

EXPOSE 3333
CMD [ "yarn", "start" ]
