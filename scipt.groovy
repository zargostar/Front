def testApp() {
    echo "init state"
}
def buildApp() {
     echo 'Starting to build the app...'
     echo "Test variable my version: ${NEW_VERSION}"
   
}
def deployApp() {
    echo "build app"
}
return this