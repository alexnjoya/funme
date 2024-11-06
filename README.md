
# funme 
Funme is a decentralized application (DApp) built with Motoko and React that allows users to create, view, and donate to crowdfunding projects. Users can upload images for projects and manage donations seamlessly.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Frontend Structure](#frontend-structure)
- [Backend (Motoko) Overview](#backend-motoko-overview)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

funme  is designed to facilitate the creation and funding of projects in a decentralized manner. The DApp uses Motoko for its backend on the Internet Computer and a React-based frontend to create an interactive user interface. This DApp allows users to:

1. Create a project with a target funding amount and an image.
2. Donate to projects and track their funding progress.
3. View all created projects with associated images and funding details.

## Features

- **Create Projects**: Add a new project with a name, target amount, and an image.
- **Donate**: Donate to a specific project and track the total donation amount.
- **View Projects**: See a list of all projects with details and images.
- **Interactive UI**: React frontend provides a user-friendly experience.

## Getting Started

### Prerequisites

To set up and run the funme Crowdfunding DApp, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Internet Computer SDK (DFX)](https://smartcontracts.org/docs/quickstart/quickstart-intro.html) (version 0.10.0 or higher)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/funme.git
   cd funme
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Start the DFX server** (in the root directory):
   ```bash
   dfx start --background
   ```

4. **Deploy the Motoko backend**:
   ```bash
   dfx deploy
   ```

5. **Start the frontend**:
   ```bash
   npm start
   ```

6. **Access the application**:
   Open a web browser and go to `http://localhost:3000` to access the funme  application.

---

## Frontend Structure

The frontend is built with React and consists of several components, each responsible for a part of the DApp:

- **App**: Main component that manages project state, handles project creation, and donations.
- **CreateProject**: Component for adding a new project with details and image upload.
- **AllProjects**: Displays a list of all projects.
- **Project**: Shows individual project details.
- **Donate**: Component to handle donations for a specific project.

### Key Files

- `App.js`: Main entry for the frontend logic.
- `CreateProject.js`: Handles new project creation and image upload.
- `AllProjects.js`: Lists all projects.
- `Project.js`: Displays each project with donation functionality.
- `Donate.js`: Form for donating to a project.

---

## Backend (Motoko) Overview

The backend, written in Motoko, is responsible for managing projects and their donations. Key functionality includes:

- **Creating a project** with an ID, name, target amount, and image.
- **Storing and retrieving projects** via the Internet Computer’s stable storage.
- **Updating donation amounts** in real-time.

### Key Motoko Functions

- `createProject`: Adds a new project to the database.
- `donate`: Allows users to donate to a specified project.
- `viewAllProjects`: Returns a list of all projects.
- `viewProject`: Fetches details for a specific project.
- `deleteProject`: Removes a project from the list.

---

## Usage

1. **Create a Project**: Enter the project details in the form (ID, name, target amount) and upload an image. Submit the form to add the project.
2. **Donate to a Project**: In the project list, find the project you want to support and enter a donation amount. Submit to update the project's current amount.
3. **View Projects**: Scroll through the list of projects to view details and images.

## Project Structure

```
funme/
│
├── backend/
│   ├── funme_backend/
│   │   ├── main.mo       # Main Motoko file with project logic
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js           # Main React component
│   │   │   ├── CreateProject.js # Component for creating projects
│   │   │   ├── AllProjects.js   # Component to display all projects
│   │   │   ├── Project.js       # Individual project details
│   │   │   └── Donate.js        # Donation form
│   │   ├── App.js             # React entry point
│   │   └── index.scss           # Styling for the application
│   └── ...
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with a detailed description of your changes.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

 funme_frontend, with canister ID pz7jz-pqaaa-aaaao-qeyvq-cai
 funme_backend, with canister ID avqkn-guaaa-aaaaa-qaaea-cai
