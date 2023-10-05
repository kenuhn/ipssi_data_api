export default class CALLAPI {

    async createUser (data) {
        const url = `http://127.0.0.1:5000/signup`
        const jsonData = data
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
            console.log('GET', error)
            return "error" 
        }
           
    }

    async loginUser (data) {
       const url = `http://127.0.0.1:5000/login`
       const myData = data
        try {
            const options = {
                method: 'POST', // Méthode HTTP POST
                headers: {
                  'Content-Type': 'application/json' // Type de contenu JSON
                },
                body: JSON.stringify(myData) // Convertit les données en format JSON
              };
    
              const response = await fetch(url, options)
              const data = await response.json()

              return data 

        } catch (error) {
            console.log('POST', error)
            return "error" 
        }
    }


    async readUser (id) {
      
        const url = `http://127.0.0.1:5000/users/${id}`
        try {
            const options = {
                method: 'GET', // Méthode HTTP POST
                headers: {
                  'Content-Type': 'application/json' // Type de contenu JSON
                },
            
              };
            const response = await fetch(`http://127.0.0.1:5000/users/${id}`, options)
            const data = await response.json()
            return data 

        } catch (error) {
            console.log(error)
            return error
        }

    }

    async updateUser (data, id) {
        const jsonData = data

        try {
            const options = {
                method: 'PUT', // Méthode HTTP POST
                headers: {
                  'Content-Type': 'application/json' // Type de contenu JSON
                },
                body: JSON.stringify(jsonData) 
              };
            const response = await fetch(`http://127.0.0.1:5000/users/${id}`, options)
            const data = await response.json()
            return data 

        } catch (error) {
            console.log(error)
            return error
        }

    }
}