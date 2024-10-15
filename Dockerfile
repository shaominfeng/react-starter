# build environment
FROM casdevreg.azurecr.io/aks-base-image/node20-base-image:1.0 AS build-env
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

# 安装生产依赖
RUN npm ci --loglevel silly --production --ignore-scripts --no-audit --legacy-peer-deps

# 安装开发依赖
RUN npm install prettier

COPY docker ./

# check style before build
RUN echo 'step 1 check style before build'
RUN npm run check || (echo "Please run `npm run prettier` to format files first!" && exit -1)

RUN echo 'step 2 run build'
RUN npm run build && echo "step3"

# production environment
FROM casdevreg.azurecr.io/aks-base-image/nginx-base-image:3
COPY --from=build-env /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
