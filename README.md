# SVG Logo Maker

## Description

The SVG Logo Maker is a command-line tool that allows users to quickly generate simple SVG logos in the shape of a circle, triangle, or square. Users can customize the size, color, and text on the logo. This project was created to simplify the process of generating custom SVG logos with minimal effort and no need for graphic design software.

The main purpose of building this project was to provide an easy way to create simple logos or placeholders that can be integrated into other applications, websites, or projects. Through the development of this project, I gained deeper knowledge of Node.js, CLI interaction, and SVG formatting.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)

## Installation

Follow these steps to install the SVG Logo Generator:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/svg-logo-generator.git

2. Navigate to the project directory: cd svg-logo-generator
3. Install the necessary dependencies using npm: npm install
4. Ensure you have Node.js installed. If not, you can download it from nodejs.org.

### Usage
To generate an SVG logo, use the command-line interface (CLI). Follow these steps:

1. Run the following command in the terminal:

bash
Copy code
node index.js
You will be prompted to select the following options:

2. Shape of the logo: Circle, Triangle, or Square
Color of the shape
Text to display inside the logo (optional)
Text color (optional)
After entering your preferences, the generator will create an SVG file in the output folder.

### Features
Three shapes: Choose between Circle, Triangle, and Square.
Customizable color: Input any hex color code for the shape and text.
Optional text: Add custom text to your logo and define its color.
Simple SVG output: Easily use your generated SVG logos in other projects.

### Credits
- Inquirer.js: For building the command-line prompts.
- Node.js: Used for building the CLI and generating the SVG file.
- Built with Jest.
- Javascript

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/new-feature).
5. Open a pull request.
