FROM node:12.18.4

COPY ["package.json", "package-lock.json", "/usr/src/AppSerpro/"]

WORKDIR /usr/src/AppSerpro/

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY [".", "/usr/src/AppSerpro"]
RUN npm build

FROM nginx:1.19.3

COPY ["nginx.conf", "/etc/nginx/nginx.conf"]
COPY --from=build-step /app/dist /usr/share/nginx/html


EXPOSE 8082

CMD ["npm", "start"]
