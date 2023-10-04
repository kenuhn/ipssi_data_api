


export default class CALLAPI {


    async createUser (data) {
        jsonData = data.json()
        try {
            const options = {
                method: 'POST', // Méthode HTTP POST
                headers: {
                  'Content-Type': 'application/json' // Type de contenu JSON
                },
                body: JSON.stringify(jsonData) // Convertit les données en format JSON
              };
    
              const response = await fetch(url, options)
              const data = await response.json()

              return data 

        } catch (error) {
            console.log('Post', error)
            return "error" 
        }
        
          
          
          
          
    }


    async readUser () {

    }


    async updateUser () {



    }

    async deleteUser () {



    }

   

    

    







}