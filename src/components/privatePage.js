import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export const PrivatePage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const service = new AuthService();
    const fetchUser = async () => {
      const user = await service.getUser();
      setUser(user);
    };

    fetchUser();
  }, [user]);

  return (
    <div>
      <h1>Private page</h1>
      <h2>Hello {user?.profile?.email}</h2>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default PrivatePage;
