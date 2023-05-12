pipeline {
     environment{
        dockerimage=""
    }
    agent any
    stages {
        stage('Git clone') {
            steps {
            git branch: 'main',url: 'https://github.com/saurabh4123/spe-major-frontend.git'
            }
        }
        stage('Docker Build Image') {
            steps {
                script{
                    dockerimage=docker.build "saurabh412/frontendspe"   
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script{
                    docker.withRegistry('','dockerhub'){
                    dockerimage.push()
                    }
                }
            }
        }
        
        stage('Ansible pull docker image') {
            steps {
                ansiblePlaybook colorized: true,
                disableHostKeyChecking: true,
                inventory: 'inventory',
                playbook: 'ansible-playbook.yml'
            }
        }

      
    }
}
