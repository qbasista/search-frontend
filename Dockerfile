#### Stage 1: Build the react application
FROM node:12.20.0 as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]