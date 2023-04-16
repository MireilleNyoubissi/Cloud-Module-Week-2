FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf


# FROM debian:buster

# RUN apt-get update -y && apt-get install -y certbot