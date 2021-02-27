pipeline{
	agent any
	// agent {
	// 	docker {
	// 		image "ubuntu:16.04"
	// 	}
	// }
	stages {
		// stage('update Ubunutu'){
		// 	steps{
		// 		sh "apt-get update"
		// 	}
		// }
		// stage('Install Node'){
		// 	steps{
		// 		sh "apt install nodejs"
		// 	}
		// }
		stage("Start NodeJsAPI Integration"){
			steps{
				sh "ls -lah"
				sh "cd nodeJsAPI"
				sh "npm install"
				sh "cd .."
			}
		}
		stage("Start Build ReactJs APP"){
			steps{
				sh "cd reactUI/bazooka"
				sh "npm install"
				sh "npm run build"
				sh "cd build"
				sh "zip -r build.war ."
				sh "mv build.war .."
			}
		}
	}
}
