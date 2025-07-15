import React, { useEffect, useState } from "react";

const ServerStatus = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch((err) => setStatus("Error connecting to backend"));
  }, []);

  return (
    <div style={{ marginTop: "30px", color: "green" }}>
      <strong>Server Status:</strong> {status}
    </div>
  );
};

export default ServerStatus;
