import React, { useState } from 'react';

function CreateProject({ onCreate }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id && name && targetAmount && image) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newProject = {
          id,
          name,
          targetAmount,
          image: new Uint8Array(reader.result)
        };
        const result = await onCreate(newProject);
        if (result) {
          setId('');
          setName('');
          setTargetAmount('');
          setImage(null);
        }
      };
      reader.readAsArrayBuffer(image);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a New Project</h2>
        <input
          type="text"
          placeholder="Project ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          required
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-200">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;
