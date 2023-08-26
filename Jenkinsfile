pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                git url: https://github.com/sayfalah/dockerQwikNginxNodePostgreSQL.git , branch: 'master'
            }
        }

   stage('Build frontend') {
            steps {
                dir('NodeBackend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        /*
         stage('Run SonarQube Analysis') {
    steps {
        dir('NodeBackend') {
            script {
                def scannerHome = tool 'SonarQube'

                withSonarQubeEnv('SonarQube') {
                   sh "${scannerHome}/bin/sonar-scanner "
                }
            }
        }
    }
}

    }

             

 stage("Deploy Artifact To Nexus") {
            steps { dir('NodeBackend'){
                script {
                pom = readMavenPom file: 'pom.xml'
                   echo "${pom.artifactId}-${pom.version}.${pom.packaging}"
                   sh "mvn deploy:deploy-file  -DskipTests=true -DgroupId=${pom.groupId} -DartifactId=${pom.artifactId} -Dversion=${pom.version}  -DgeneratePom=true -Dpackaging=${pom.packaging}  -DrepositoryId=deploymentRepo -Durl=http://localhost:8081/repository/maven-snapshots/ -Dfile=target/${pom.artifactId}-${pom.version}.${pom.packaging}"
                }
            }
        }}
        

    
       /*

         
        stage('Build and tag Images') {
            steps {
                  sh "docker login -u sayfalah -p sayf2020*"
                sh 'docker-compose build'
                sh'docker tag ebank-fullstack_frontend:latest sayfalah/:1'
                 

            }
        }
          stage('push Images to dockerhub') {
            steps {
               
            sh'docker push malekghraba/frontend:1'
            sh'docker push malekghraba/backend:1'
            sh'docker push malekghraba/mysql:1'
            }}

    stage('Start Minikube') {
            steps {
                script {
                    // Start Minikube with the Docker driver
                    sh 'minikube start --driver=docker'
                }
            }
        }

        stage('Deploy to Minikube') {
            steps { 
             
             script{
                // Apply Kubernetes Deployment and Service manifests.
            
                sh 'kubectl create -f mysql-deployment.yaml'
                sh 'kubectl create -f backend-deployment.yaml'
                sh 'kubectl create -f frontend-deployment.yaml'
                sh 'kubectl create -f mysql-service.yaml'
                sh 'kubectl create -f frontend-service.yaml'
        }}}
         stage('Stop Minikube') {
            steps {
                script {
                    // Stop Minikube after the pipeline is complete
                    sh 'minikube stop'
                    sh 'minikube delete'
                }
            }
        } */
   
}
    }
