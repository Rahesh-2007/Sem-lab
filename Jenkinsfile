pipeline{
    agents any{
        Stages{
            Stage('Clone'){
                Steps{
                branch: "main",
                url: ""
                }
            }
             Stage('Install Dependencies'){
                Steps{
                    bat 'npm install'
                }
            }
             Stage('Build'){
                Steps{
                    bat 'npm run build'
                }
            }
        }
        Post{
            sucess{
                echo "successfully build"
            }
            failure{
                echo "failed to build"
            }
        }
    }
}