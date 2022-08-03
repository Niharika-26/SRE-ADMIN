FROM node:16-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT=13000
ENV REACT_APP_BACKEND_URL=http://localhost:18000
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
