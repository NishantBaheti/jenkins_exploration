job('NodeJs Example'){
	scm {
		git('https://github.com/NishantBaheti/jenkins_exploration.git')
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
