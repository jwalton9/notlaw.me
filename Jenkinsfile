pipeline {
  agent {
    docker {
      image 'node:12'
      args '-e HOME=/var/jenkins_home -v /var/jenkins_home/.cache/yarn:/var/jenkins_home/.cache/yarn'
    }
  }

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}
