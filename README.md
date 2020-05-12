# Debugging a multi-container docker config hosted on Elastic Beanstalk

[![Build Status](https://www.travis-ci.org/branflake2267/debugging-multi-docker-aws-eb.svg?branch=master)](https://www.travis-ci.org/branflake2267/debugging-multi-docker-aws-eb)

## Part 1: Debugging the Client & Server Source
This project extends part 1, [debugging an express server and simple webpack client](https://github.com/branflake2267/debugging-express-with-simplehtmlwebpack). Check this it for even more debugging tips and tricks. 

[![Debugging Video Tutorial](https://img.youtube.com/vi/-Y8J4sgr6uU/0.jpg)](https://www.youtube.com/watch?v=-Y8J4sgr6uU)

## Part 2: Debugging Client & Server Source with Elastic Beanstalk
Part 2 adds Elastic Beanstalk to the project deployment configuration. This video covers how to debug the project with Elastic Beanstalk multi-docker container format. 

[![Debugging Video Tutorial](https://img.youtube.com/vi/exbLigZZCZU/0.jpg)](https://www.youtube.com/watch?v=exbLigZZCZU)


## Project Configuration
This is the part 2 project configuration.

| Setting | Value |
| --- | --- |
| Purpose | Debugging a client & server multi-container docker config hosted on Elastic Beanstalk |
| Server | Express web server |
| Client | Simple HTML/JavaScript webpack configuration |
| Language | JavaScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| CI | Travis CI |
| Hosted | Elastic Beanstalk |
| License | GPL v3 |
| Tutorial | [Youtube Tutorial](https://www.youtube.com/watch?v=exbLigZZCZU) |


## Debugging

* From the project root, run `npm install` to download the libraries used in the client and server directories.

### Debugging Server

* Use the VS Code Launcher `1. Launch Server`
* http://localhost:3000 - ./ server
* http://localhost:3000/api - ./api server

### Debugging Client

* Use the VS Code Launcher `2. Launch Client`
* http://localhost:8080 - ./ client

### Debugging Client & Server Together
Debug both the client and server together. The webpack dev server provides a reverse proxy to the server. 

* Use the VS Code Launcher `3. Launch Client Chrome`
* http://localhost:8080 - ./ client
* http://localhost:8080/api - ./api server

### Debugging Multi-Docker Container
Make sure things work locally in the `eb local run` runner!

* Run `npm install`
* Run `npm run build`
* Run `eb local run`
* Open http://0.0.0.0:3000

### Debugging Docker Containers

| cmd | details |
| --- | --- |
| docker ps | list the docker containers and [container id]s |
| docker exec -it [container id] bash| /bin/bash into the container. (The container name could be used as well.) |
| eb local run | This will run the Dockerrun.aws.json multi-container configuration  |  


## Build
Build from the root of this project. 

* Run `npm install`
* Run `npm run build`
* The files will be output to the `./dist` directory.
* Run `npm run serverFromDist` to run the server from `./dist` build directory.
* Open http://localhost:3000 or http://localhost:3000/api


## Deploy
[Travis CI server deploys](https://www.travis-ci.org/github/branflake2267/debugging-multi-docker-aws-eb) to Elastic Beanstalk. 



## Configure Elastic Beanstack Application & Enviornment
This is a reference on how the Elastic Beanstalk application was created.

### Configure AWS & EB CLI
Configure the AWS CLI and EB CLI utilities.

* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* [Configure AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
* [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html)

Run `aws configure` to configure the AWS credentials locally.

### Create Elastic Beanstalk Application
Set up the Elastic Beanstalk application.

Run `eb init` to configure the Elastic Beanstalk hosting config.

* Choose the datacenter that makes sense to you. (I'll choose the default.)
* Choose `Create New Application` and I use the default application name in this example.
* Choose `Multi-container Docker` and the latest version.
* Do not choose CodeCommit in this config.
* Choose the SSH key to setup SSH, if you want to use SSH.

This will create a project file [./.elasticbeanstalk/config.yml](./.elasticbeanstalk/config.yml).

### Create Elastic Beanstalk Environment.
Set up an Elastic environment for your application. 

Run `eb create sandbox-staging-v1` where `sandbox-staging-v1` is the enviornment name you choose. 

## Docker Config
The `Dockerrun.aws.json` will configure the docker container when deployed. 
In this configuration I won't show how to build and deploy a Docker image to ECR.


