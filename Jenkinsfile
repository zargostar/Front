def gv
pipeline {
  agent any
  
  environment {
    NEW_VERSION = '1.2.1'
    GIT_CREDENTIALS = credentials('gitcredit')  // fixed syntax for credentials step
  }
  parameters {
    choice(name: 'VERSIONING', choices: ['1.0.0', '2.0.0', '3.0.0'], description: 'Select the version')
    booleanParam(name: 'executeTest', defaultValue: true, description: 'Execute tests or not')
  }
  stages {
    stage("init"){
      steps{
        script{
          gv=load "scrip.groovy"

        }
      }
    }
    stage("test") {
      when {
        expression {
          params.executeTest
        }
      }
      steps {
        scrip{
          gv.testApp()
        }
      }
    }
    stage("build") {
      steps {
        script{
          gv.buildApp()
        }
      }
    }
    stage("deploy") {
      steps {
        script{
          gv.deployApp()
        }
        // withCredentials([usernamePassword(credentialsId: 'gitcredit', usernameVariable: 'USER', passwordVariable: 'PWD')]) {
        //   sh "some_script.sh ${USER} ${PWD}"  // fixed variable names and syntax
        // }
        echo 'Deployment finished successfully.'
      }
    }
  }
  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo 'Sending email to users...'
      // You can add email step here
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}
