from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {"id": 1, "name": "Tomato", "price": 25},
    {"id": 2, "name": "Potato", "price": 20},
    {"id": 3, "name": "Onion", "price": 30},
    {"id": 4, "name": "Apple", "price": 80},
    {"id": 5, "name": "Banana", "price": 40},
]

@app.route("/products")
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)
