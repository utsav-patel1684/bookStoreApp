
import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null); 
      localStorage.removeItem("users"); 
      toast.success("Logout successful");
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <button
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
