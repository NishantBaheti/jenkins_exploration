# Jenkins Exploration


### Create Jenkins-Docker image 
* git clone 
* cd jenkins-exporation
* docker build -t Jenkins-Docker .
* docker images 

### Start Container
* docker run -p 8080:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home -v /var/docker/docker.sock:/var/docker/docker.sock --name jenkins-docker -d jenkins-docker:latest
