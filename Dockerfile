# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY . .
ENV REACT_APP_API_URL=13.201.222.254
RUN npm install
RUN npm run build

# Stage 2: Serve
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "-l", "5000", "build"]

