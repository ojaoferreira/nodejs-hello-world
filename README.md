# nodejs-hello-world
Example project with NodeJS

# Running the project
git clone https://github.com/ojaoferreira/nodejs-hello-world.git

cd nodejs-hello-world

npm install

node app.js

# Docker build image
docker build -t nodejs-hello-world .

# Running docker image
docker run -p 3000:3000 -d nodejs-hello-world