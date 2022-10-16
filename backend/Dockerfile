# FROM node:18-alpine
FROM node:18
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app && mkdir -p /home/node/app/backend && chown -R node:node /home/node/app/backend
WORKDIR /home/node/app/backend
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY --chown=node:node . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
