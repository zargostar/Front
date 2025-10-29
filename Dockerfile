

FROM node:trixie-slim AS build

WORKDIR /usr/src/app
# is used to set the working directory inside the Docker container.
# 👉 "From this point onward in the Dockerfile, treat /usr/src/app as the current directory."
# Any subsequent commands (like COPY, RUN, CMD, etc.) will be executed relative to this direcory
ARG VITE_WEB_SERVERE=http://localhost:5001/api
#ARG VITE_APP_ENV=developmen
# ARG ENV_FILE=.env.production
#ENV VITE_APP_ENV=${VITE_APP_ENV}
ENV VITE_APP_ENV=http://dev.mu.com
ENV VITE_WEB_SERVERE=${VITE_WEB_SERVERE}

ENV VITE_IMAGE_SERVER=img.development.com
# Set them as environment variables so they are available to the build
# ENV VITE_WEB_SERVERE="VITE_WEB_SERVERE"
# ENV VITE_IMAGE_SERVER="VITE_IMAGE_SERVER"

# Copy dependency files
COPY package*.json ./
# The wildcard * matches both package.json and package-lock.json (or package-lock.yaml in case of other package managers like pnpm/yarn).
# This is a common pattern to avoid writing two separate COPY commands.
RUN npm ci
# is used to install Node.js project dependencies in a clean, consistent, and repeatable way, based on your package-lock.json
# 🚨 Requirements for npm ci

# package-lock.json must exist.

# If node_modules/ already exists, npm ci deletes it before installing.

# If you don’t have a lockfile, npm ci will fail.
# The COPY . . command will copy all the files and subdirectories (including .env, src/, public/, etc.)
#  from /DOCKER-REACT (or the current directory where docker build is run)
#  into the /app directory inside the container.
COPY . .
# 📁 "Copy everything in the current folder on my local machine (except things in .dockerignore)."
# is short but powerful — it copies the entire contents of your local build context (project folder) into the current working directory inside the Docker image.
# 📦 "Put those copied files into /usr/src/app inside the Docker image."
# Build the React app (outputs to /usr/src/app/build by default)
RUN npm run build
# ========== PRODUCTION STAGE ==========
FROM nginx:stable-alpine AS production

# Copy custom nginx config (e.g., default.conf) if exists
# /etc/nginx/conf.d is located in image?
# Yes, exactly! The directory /etc/nginx/conf.d is inside the Nginx Docker image.
#in default.conf which is created by developer the confige is setted
#this file will be copied to /etc/nginx/conf.d in docker image
COPY --from=build /usr/src/app/nginx /etc/nginx/conf.d

# Copy built app to NGINX's html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY index7070.html /usr/share/nginx/html
# Expose port 80
EXPOSE 80 
# CMD ["nginx", "-g", "daemon off;"]
# Start NGINX
ENTRYPOINT ["nginx", "-g", "daemon off;"]
