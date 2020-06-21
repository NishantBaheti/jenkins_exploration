job('NodeJs Example'){
	scm {
		git('https://github.com/NishantBaheti/jenkins_exploration.git')
	}
	triggers {
		scm('H/5 * * * *')
	}
	wrappers {
		nodeks('nodejs')
	}
	steps {
		shell("cd nodeJsApi")
		shell("npm install")
	}
}
