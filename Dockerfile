FROM nginx:latest
COPY ./MathsWiz.html /usr/share/nginx/html/index.html
COPY ./MathsWiz.css /usr/share/nginx/html/MathsWiz.css
COPY ./MathsWiz.js /usr/share/nginx/html/MathsWiz.js
