pipeline{
    agents any{
        Stages{
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
    }
}