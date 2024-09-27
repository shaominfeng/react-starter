# build environment
FROM node:20-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

RUN npm install -D npm prettier \
    && npm ci --loglevel silly --production --ignore-scripts --no-audit \
    && rm -f .npmrc \

COPY . ./

# check style before build
RUN echo 'step 1 check style before build'
RUN npm run check || (echo "Please run `npm run prettier` to format files first!" && exit -1)

RUN echo 'step 2 run build'
RUN npm run build && echo "step3"

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
