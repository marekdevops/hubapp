from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/api/generate', methods=['POST'])
def generate_name():
    data = request.get_json()
    name = data.get('name', '')

    # Uruchom skrypt.py z nazwą jako argumentem
    result = subprocess.run(
        ['python3', 'skrypt.py', name],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    # Zwróć wynik działania skryptu
    return jsonify({
        'output': result.stdout.strip(),
        'error': result.stderr.strip()
    })

if __name__ == '__main__':
    app.run(port=5000)
