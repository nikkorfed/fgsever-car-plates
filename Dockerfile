ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine AS deps

WORKDIR /app
COPY package*.json ./
RUN npm install

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine AS runner

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

CMD ["npm", "run", "start:migrate"]