from flask import Flask,jsonify,request
from flask_cors import CORS
app = Flask(__name__)

import mysql.connector

connection_params = {
    'host': "localhost",
    'user': "root",
    'password': "",
    'database': "spotify",
}

CORS(app)
@app.route('/')

#Renvoi la liste des utilisateurs
@app.route('/users',methods=['GET'])
def get_users():
     request = "select * from users"

     with mysql.connector.connect(**connection_params) as db :
          with db.cursor() as c:
               c.execute(request)
               resultats = c.fetchall()
                
               users_list = []
               for user in resultats:
                    users_list.append(user)
          
               return jsonify(users_list)

#Renvoi un utilisateur parmi la liste
@app.route('/users/<int:user_id>',methods=['GET'])
def get_book(user_id):
     request = "select * from users where id = %s"

     with mysql.connector.connect(**connection_params) as db:
        with db.cursor(dictionary=True) as c:
            c.execute(request, (user_id,))
            user = c.fetchone()
            if user:
               return jsonify(user)
            else:
               return {'error': "L'utilisateur n'a pas été trouvé"}, 404

#Créer un nouvel utilisateur
@app.route('/signup', methods=['POST'])
def create_user():
    db_request = "select * from users"
    with mysql.connector.connect(**connection_params) as db :
     with db.cursor() as c:
          c.execute(db_request)
          resultats = c.fetchall()
          users_list = []
          for user in resultats:
               users_list.append(user)

     data = request.json
     user_id = len(users_list)+1
     name = data.get('name')
     password = data.get('password')

    db_request = "INSERT INTO users (id, name, password) VALUES (%s,%s, %s)"

    with mysql.connector.connect(**connection_params) as db:
        with db.cursor() as c:
            c.execute(db_request, (user_id,name, password))
            db.commit()
            return jsonify({'message':"L'utilisateur a été créer avec succès"})

#Connexion d'un utilisateur
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('name')
    password = data.get('password')
    db_request = "SELECT * FROM users WHERE name = %s"

    with mysql.connector.connect(**connection_params) as db:
        with db.cursor(dictionary=True) as c:
            c.execute(db_request, (username,))
            user = c.fetchone()

    if user is None:
        return jsonify({'message': 'Utilisateur non trouvé'}), 401

    if user['password'] != password:
        return jsonify({'message': 'Mot de passe incorrect'}), 401

    return jsonify({'message': 'Connexion réussie', 'userId': user['id'], 'name': user['name']}), 200

#Modifier un utilisateur
@app.route('/users/<int:user_id>', methods=['PUT'])
def modify_user(user_id):
    data = request.json
    new_name = data.get('name')
    new_password = data.get('password')
    db_request = "SELECT * FROM users WHERE id = %s"

    # Connexion à la base de données
    with mysql.connector.connect(**connection_params) as db:
        with db.cursor(dictionary=True) as c:
            c.execute(db_request, (user_id,))
            user = c.fetchone()

    if user is None:
        return {'error': "L'utilisateur n'a pas été trouvé"}, 404

    # Mettre à jour les champs de l'utilisateur
    if new_name is not None:
        user['name'] = new_name
    if new_password is not None:
        user['password'] = new_password

    db_request = "UPDATE users SET name = %s, password = %s WHERE id = %s"
    
    # Connexion à la base de données et exécution de la mise à jour
    with mysql.connector.connect(**connection_params) as db:
        with db.cursor() as c:
            c.execute(db_request, (user['name'], user['password'], user_id))
            db.commit()

    return jsonify(user)

#Supprimer un utilisateur
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete(user_id):
     request = "delete from users where id = %s"

     with mysql.connector.connect(**connection_params) as db:
        with db.cursor(dictionary=True) as c:
          c.execute(request, (user_id,))
          return {'error': "L'utilisateur a été supprimé avec succès"}
     
if __name__ == '__main__':
     app.run(debug=True)