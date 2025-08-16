from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"status": "Backend rodando com sucesso - Criar di Monte V3"}

@app.route("/api/test", methods=["GET"])
def test():
    return jsonify({"message": "API funcionando!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
