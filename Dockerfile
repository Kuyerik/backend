FROM node:18


WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
COPY nest-cli.json ./


RUN npm install

EXPOSE 3001

CMD ["npm", "start", "dev"]



