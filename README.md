# BeeOnCode Internship Project

## Installation and Running Instructions

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/blackrainbowtest/BeeOnCode_Intership_02.git inter02
cd inter02
```

### 2. Install dependencies

Navigate to the project folder and run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Start the database server

This project uses `json-server` to emulate the server. Start the server on port 4000 with the command:

```bash
npm run server
```

### 4. Start the application

Now you can start the client application. In another terminal, run the command:

```bash
npm start
```

### Application Features

- **Upload SVG images**: You can upload only SVG images. After uploading, you can choose a color and enter a title.
- **Drag and Drop**: Images can be dragged around the page.
- **Edit and Delete**: You can edit and delete existing items.
- **Select an item**: Clicking on an item will highlight it with a circle to indicate the selected process.

### Note



Make sure you are using Node.js version 14 or higher for the project to work correctly.