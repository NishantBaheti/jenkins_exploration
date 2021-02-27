pipeline{
	agent any
	// agent {
	// 	docker {
	// 		image "ubuntu:16.04"
	// 	}
	// }
	stages {
		stage('update Ubunutu'){
			steps{
				sh "apt-get update -y"
			}
		}
		// stage('Install Node'){
		// 	steps{
		// 		sh "apt install nodejs -y"
		// 	}
		// }
		stage("Start NodeJsAPI Integration"){
			steps{
				sh "ls -lah"
				dir("nodeJsApi"){
					nodejs('nodejs') {
						sh "npm install"
					}
				}
			}
		}
		stage("Start Build ReactJs APP"){
			steps{
				sh "ls -lah"
				dir("reactUI/bazooka"){
					nodejs('nodejs') {
						sh "npm install"
						sh "npm run build"
					}
				}
				// sh "cd build || zip -r build.war . || mv build.war .."
			}
		}
	}
}
