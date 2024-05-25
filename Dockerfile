FROM node:18-alpine
RUN apk update && apk add git

WORKDIR /
COPY public/ /public
COPY src/ /src
COPY package.json /
RUN npm install --legacy-peer-deps
CMD ["npm", "start"] 
