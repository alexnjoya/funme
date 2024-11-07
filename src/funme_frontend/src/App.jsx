import { funme_backend } from 'declarations/funme_backend';
import './index.scss';
import React, { useState, useEffect } from 'react';
import AllProjects from './components/allproject';
import CreateProject from './components/createproject';


function App() {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch all projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsArray = await funme_backend.viewAllProjects();
        setProjects(projectsArray);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setMessage("Failed to load projects.");
      }
    };
    fetchProjects();
  }, []);

  // Handle project creation
  const handleCreateProject = async (newProject) => {
    try {
      const result = await funme_backend.createProject(
        newProject.id,
        newProject.name,
        parseFloat(newProject.targetAmount),
        newProject.image
      );
      if (result) {
        const updatedProjects = await funme_backend.viewAllProjects();
        setProjects(updatedProjects);
        setMessage("Project created successfully!");
      } else {
        setMessage("Failed to create project.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      setMessage("An error occurred while creating the project.");
    }
  };

  // Handle donations to a project
  const handleDonate = async (projectId, amount) => {
    try {
      const result = await funme_backend.donate(projectId, amount);
      if (result) {
        setMessage("Donation successful!");
        const updatedProjects = await funme_backend.viewAllProjects();
        setProjects(updatedProjects);
      } else {
        setMessage("Failed to donate to project.");
      }
    } catch (error) {
      console.error("Error donating to project:", error);
      setMessage("An error occurred while donating.");
    }
  };

  return (
    <div className="m-10">
      {message && <p className="text-green-500 mb-4">{message}</p>}
      
      <CreateProject onCreate={handleCreateProject} />
      <AllProjects projects={projects} onDonate={handleDonate} />
    </div>
  );
}

export default App;
