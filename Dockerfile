FROM node:18-alpine as builder

LABEL version="0.5"
LABEL description="This is the base docker image for the Profitak Obedy frontend React app built with Waku."

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY public/ public/

COPY src/ src/

COPY components.json .
COPY tsconfig.json .
COPY tailwind.config.js .
COPY postcss.config.js .

RUN yarn build

# COPY httpd.conf dist/

RUN ls -l

RUN cd dist/ && ls -l

EXPOSE 5000

# Check if build succeeded
RUN [ -d "/app/dist" ] || exit 1

# FROM httpd:alpine

# WORKDIR /usr/local/apache2/htdocs/

# COPY --from=builder /app/dist .

# COPY --from=builder /app/dist/public .

# RUN ls -l

# COPY httpd.conf /usr/local/apache2/conf/

# COPY --from=builder /app/dist/public/index.html .

CMD ["yarn", "start"]

# Health check to verify application is running
# HEALTHCHECK --interval=30s CMD wget -qO- http://localhost:5000 || exit 1

