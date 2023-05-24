import sqlite3
from __init__ import app
from flask import request, jsonify

DATABASE = 'sql/data.db'


def create_database():
    connection = sqlite3.connect(DATABASE)
    connection.execute(
        'CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)')
    connection.commit()
    connection.close()


create_database()

def execute_query(query, params=None):
    connection = sqlite3.connect("sql/data.db")
    cursor = connection.cursor()
    if params:
        cursor.execute(query, params)
    else:
        cursor.execute(query)
    connection.commit()
    cursor.close()
    connection.close()


@app.route('/api/update', methods=['PUT'])
def update_todo():
    data = request.get_json()
    id = data.get('id')
    content = data.get('content')

    try:
        query = "UPDATE lists SET content = ? WHERE id = ?"
        execute_query(query, (content, id))

        # Construct a response
        response = {'status': 'success',
                    'message': 'List item updated successfully'}
    except sqlite3.Error as e:
        # Handle database errors
        response = {'status': 'error',
                    'message': 'An error occurred while updating the list item'}

    return jsonify(response)


@app.route('/api/delete', methods=['DELETE'])
def delete_todo():
    data = request.get_json()
    id = data.get('id')

    try:
        query = "DELETE FROM lists WHERE id = ?"
        execute_query(query, (id,))

        # Construct a response
        response = {'status': 'success',
                    'message': 'List item deleted successfully'}
    except sqlite3.Error as e:
        # Handle database errors
        response = {'status': 'error',
                    'message': 'An error occurred while deleting the list item'}

    return jsonify(response)
