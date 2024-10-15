## build environment
#FROM casdevreg.azurecr.io/aks-base-image/node20-base-image:1.0 AS build-env
#WORKDIR /app
#
#COPY build ./
#COPY package.json ./
#COPY package-lock.json ./
#
## 安装生产依赖
#RUN npm ci --loglevel silly --production --ignore-scripts --no-audit --legacy-peer-deps
#
## 安装开发依赖
#RUN npm install prettier
#
#COPY docker ./
#
## check style before build
#RUN echo 'step 1 check style before build'
#RUN npm run check || (echo "Please run `npm run prettier` to format files first!" && exit -1)
#
#RUN echo 'step 2 run build'
#RUN npm run build && echo "step3"
#
## production environment
#FROM casdevreg.azurecr.io/aks-base-image/nginx-base-image:3
#COPY --from=build-env /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# 使用 Nginx 基础镜像
FROM casdevreg.azurecr.io/aks-base-image/nginx-base-image:3

# 将本地编译的 build 目录复制到 Nginx 的 html 目录中
COPY build /usr/share/nginx/html

# 复制 Nginx 配置文件
COPY docker/nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

