pipeline {
  agent {
    docker {
      image 'node:12-alpine'
      args '-v $HOME/.cache/yarn:/.cache/yarn'
    }
  }

  stages {
    stage('Install') {
      steps {
          sh 'yarn install'
      }
    }

    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}