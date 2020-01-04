# nodejs-hello-world
Example project with NodeJS

# Running the project
npm install

node app.js

# Docker build image
docker build -t nodejs-hello-world .

# Running docker image
docker run -p 3000:3000 -d nodejs-hello-world