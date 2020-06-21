job('NodeJs Example'){
	scm {
		git('https://github.com/NishantBaheti/jenkins_exploration.git'){node ->
            		node / gitConfigName('nishantbaheti')
            		node / gitConfigEmail('nishantbaheti.it19@gmail.com')
        	}
	}
	triggers {
		scm('H/5 * * * *')
	}
	wrappers {
		nodejs('nodejs')
	}
	steps {
		shell("cd nodeJsApi")
		shell("npm install")
	}
}
