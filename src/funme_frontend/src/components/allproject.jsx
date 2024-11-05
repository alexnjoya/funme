import React from 'react';
import Project from './project';

function AllProjects({ projects, onDonate }) {
  return (
    <div>

   <h2 className="text-2xl ml-6 font-semibold mb-4">All Projects</h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(([id, project]) => (
        <Project key={id} project={project} onDonate={onDonate} />
      ))}
    </div>
    </div>
  );
}

export default AllProjects;
