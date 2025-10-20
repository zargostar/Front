pipeline {
  agent any
  environment {
    NEW_VERSION = '1.2.1'
    GIT_CREDENTIALS =credential('gitcredit')
  }
  parameters {
    choice (name : 'VERSIONING',choices : ['1.0.0','2.0.0','3.0.0'],description)
    booleanParam(name :'executeTest',defaultValue: true,description:'')
  }
  stages {
    stage("test"){
      when {
        //condition to run this stage
        expression{
          //BRANCH_NAME == "DEV" && CODE_CHANGES == true
          params.executeTest
        }
      }
      steps {
        echo 'start test unit test'
        
      }
    }
    stage("build") {
      steps {
        echo 'start building the app'
        echo "test of variable my version ${NEW_VERSION}"
      }
        
      }
    stage("deploy"){
      steps {
        echo 'deploy the app'
        WithCredentials([usernamePasword(credentials : ,usernameVariable : USER,passwordWariable : PWD)]) {
          sh "some script ${USE} ${PWD}"
        }
        echo 'ok'
      }
      
    }
    
  }
  post {
    //logic done afte build finished
    always {

    }
    success {
      echo 'send email to users'

    }
    failure {

    }
  }
  
}
