### Hexlet tests and linter status:

[![Actions Status](https://github.com/natalialabunskaia/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/natalialabunskaia/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/918cc80a627bf1e73bc8/maintainability)](https://codeclimate.com/github/natalialabunskaia/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/918cc80a627bf1e73bc8/test_coverage)](https://codeclimate.com/github/natalialabunskaia/frontend-project-46/test_coverage)


# Gendiff – Difference Generator  

## 📌 About  
**Gendiff** is a CLI tool that compares two configuration files and shows the difference.  
Supports **JSON** and **YAML** file formats, and multiple output formats:  
- **Stylish** (structured tree-like format)  
- **Plain** (human-readable format)  
- **JSON** (structured format for further processing)  

## 🚀 Installation  
1. Clone the repository:  

   git clone https://github.com/natalialabunskaia/frontend-project-46.git

   cd frontend-project-46

Install dependencies:

make install

Link the package (optional):

npm link


🛠 Usage


Run the command with two file paths:
gendiff file1.json file2.json

Output Formats:

Stylish (default):

gendiff file1.yml file2.yml

Plain text:

gendiff --format plain file1.json file2.json

JSON format:

gendiff --format json file1.yml file2.yml

📷 Demo:

[![asciicast](https://asciinema.org/a/Lwg1lwdlPGnCuGOucPkwDXqjj.svg)](https://asciinema.org/a/Lwg1lwdlPGnCuGOucPkwDXqjj)

