from flask import Flask, jsonify, request
from database.connection import get_db_connection

app = Flask(__name__)

@app.route('/api/customers', methods=['GET'])
def get_customers():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers")
    customers = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(customers)

@app.route('/api/customers', methods=['POST'])
def add_customer():
    new_customer = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO customers (name, email, phone) VALUES (%s, %s, %s)",
                   (new_customer['name'], new_customer['email'], new_customer['phone']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify(new_customer), 201

@app.route('/api/customers/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    updated_customer = request.json
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE customers SET name = %s, email = %s, phone = %s WHERE id = %s",
                   (updated_customer['name'], updated_customer['email'], updated_customer['phone'], customer_id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify(updated_customer)

@app.route('/api/customers/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM customers WHERE id = %s", (customer_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'result': 'Customer deleted'})

if __name__ == '__main__':
    app.run(debug=True)