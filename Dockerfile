FROM node:latest
WORKDIR /app
RUN npx create-react-app .
CMD ["npm", "run", "start","--host"]

