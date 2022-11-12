# debian distro - a big larger than alpine but easier to debug/inspect 
FROM node:18
# create workdir & set it
RUN mkdir -p /home/node/app/backend
WORKDIR /home/node/app/backend
COPY package*.json ./
# run npm installm clean cache to keep img lean & change ownership to non-root node user
RUN npm install && npm cache clean --force && chown -R node:node /home/node/app/backend
EXPOSE 3000
USER node
CMD ["npm", "start"]