pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
  }
  post {
    success {
      echo 'successfully build'
    }
    failure {
      echo 'failed to build'
    }
  }
}