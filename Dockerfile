FROM node:18

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "start"]
