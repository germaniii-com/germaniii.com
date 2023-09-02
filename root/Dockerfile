FROM node:lts
WORKDIR /app
COPY . .
COPY package*.json .
RUN npm run build
CMD ["npm", "run", "start"]

