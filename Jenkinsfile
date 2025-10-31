pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'http://host.docker.internal/root/renteasy.git',
                    credentialsId: 'Gitlab3' // el ID de tu token de GitLab en Jenkins
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t mi-backend ./Back-end'
                sh 'docker build -t mi-frontend ./Front-end'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker rm -f mi-backend-container || true'
                sh 'docker rm -f mi-frontend || true'
                sh 'docker run -d --name mi-backend-container mi-backend'
                sh 'docker run -d --name mi-frontend mi-frontend'
            }
        }
    }
}
