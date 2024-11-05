import React, { useState } from 'react';

function Donate({ projectId, onDonate }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amount) {
      await onDonate(projectId, parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="number"
        placeholder="Amount to donate"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-200"> Donate</button>
     
    </form>
  );
}

export default Donate;
