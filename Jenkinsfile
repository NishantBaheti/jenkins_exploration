pipeline{
	agent any
	stages {
		stage('update Ubunutu'){
			steps{
				sh "apt-get update"
			}
		}
		stage('Install Node'){
			steps{
				sh "apt install nodejs"
			}
		}
		stage("Start NodeJsAPI Integration"){
			steps{
				sh "cd nodeJsAPI"
				sh "npm install"
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
