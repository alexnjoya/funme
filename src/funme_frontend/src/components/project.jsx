import React from 'react';
import Donate from './donate';

function Project({ project, onDonate }) {
  return (
    <div className=" border border-gray-100 hover:shadow-lg rounded-lg p-6 mb-6 bg-white">
      {project.image && (
        <img 
          src={`data:image/jpeg;base64,${Buffer.from(project.image).toString('base64')}`}
          alt={project.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-bold text-gray-800 mt-4">{project.name}</h3>
      <p className="text-gray-600">Target Amount: <span className="font-semibold">GHS {project.targetAmount}</span></p>
      <p className="text-gray-600">Current Amount: <span className="font-semibold">GHS  {project.currentAmount}</span></p>
      <Donate projectId={project.id} onDonate={onDonate} />
    </div>
  );
}

export default Project;
