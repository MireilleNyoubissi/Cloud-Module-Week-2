FROM node:16
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "developement" ]; \ 
        then npm install;  \ 
        else npm install --only=production; \ 
        fi
COPY . ./
ENV MONGO_USER=root
ENV MONGO_PASS=pass
ENV MONGO_DATABASE=sentenceapp
ENV CITIES_API="http://localhost:5000/api"
ENV PORT 5000
EXPOSE $PORT
RUN npm install pm2 -g
CMD ["pm2-runtime","serverCities.js","--no-autorestart"]
