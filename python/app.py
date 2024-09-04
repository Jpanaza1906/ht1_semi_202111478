from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint 1: /check
@app.route('/check', methods=['GET'])
def check():
    return "OK", 200

# Endpoint 2: /
@app.route('/', methods=['GET'])
def home():
    response = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de sistemas 1",
        "Seccion": "Seccion A",
        "Periodo": "2do Semestre 2024",
        "Estudiante": "Jose David Panaza Batres - 202111478"
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000)
