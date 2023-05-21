# Specify Node Version and Image

# Name image development (can be anything)
FROM node:14 AS development

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy all files from current directory to container
COPY . .

RUN npm run build

# Expose port 3000

EXPOSE 3000

###########################
### Production Container ##
###########################

# Name image production (can be anything)
FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

COPY --from=development /usr/src/app/ .

# Expose port 3000
EXPOSE 3000

# Run app
CMD ["node", "dist/main"]

