# FROM node:18-alpine
FROM node:18-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
# RUN mkdir -p ./frontend/build && chown -R node:node /home/node/app/frontend/build
COPY --chown=node:node . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
