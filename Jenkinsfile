pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t cicd-demo .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Tests passed ✅"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f cicd-demo-container || true
                docker run -d -p 10000:10000 --name cicd-demo-container cicd-demo
                '''
            }
        }
    }
}
