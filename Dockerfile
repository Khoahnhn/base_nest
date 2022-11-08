FROM node:14 as builder
WORKDIR /api
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
# RUN cp .env.docker .env
RUN yarn build

FROM node:14-slim
WORKDIR /api
COPY --from=builder /api ./
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
