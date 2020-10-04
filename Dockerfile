FROM node:12.18.4

COPY ["package.json", "package-lock.json" "/usr/src/AppSerpro"]

WORKDIR /usr/src/AppSerpro/

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY [".", "/usr/src/AppSerpro"]


CMD ["npm", "start"]
