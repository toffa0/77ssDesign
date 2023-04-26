import { API_VERSION, BASE_URL } from "@/config";
import React, { useEffect, useState } from "react";

const ConfirmEmail = () => {
  const [status, setStatus] = useState("Confirming email ⏳");
  useEffect(() => {
    const confirmEmailRequest = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const key = urlParams.get("k");
      const token = urlParams.get("t");
      try {
        const response = await fetch(
          `${BASE_URL}/${API_VERSION}/user/confirm-email/${key}/${token}/`
        );
        const data = await response.json();

        if (!response.ok) {
          console.error(data.message);
        } else {
          setStatus("Email confirmed ✅");
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    confirmEmailRequest();
  }, []);
  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default ConfirmEmail;
