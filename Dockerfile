FROM nginx:alpine
COPY /dist/swift-media /usr/share/nginx/html
EXPOSE 80