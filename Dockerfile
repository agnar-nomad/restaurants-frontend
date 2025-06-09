# Stage 1: Build the application
FROM node:18-alpine as builder

LABEL version="0.5"
LABEL description="Build stage for Profitak Obedy frontend React app built with Waku."

WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copy source and config files
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production image
FROM node:18-alpine

LABEL version="0.5"
LABEL description="Production image for Profitak Obedy frontend React app built with Waku."

WORKDIR /app

# Copy package files and install only production dependencies
COPY package.json yarn.lock* ./
RUN yarn install --production --frozen-lockfile

# Copy built assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:8080 || exit 1

# Start the application
CMD ["yarn", "start"]
