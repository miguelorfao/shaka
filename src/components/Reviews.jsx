import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

function Reviews() {
  useEffect(() => {
    // Load TripAdvisor widget script dynamically
    const script = document.createElement("script");
    script.src =
      "https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=12345&locationId=YOUR_LOCATION_ID&lang=en_US&border=true&display_version=2";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-gray-100 mt-12">
      <div
        id="TA_cdsratingsonlynarrow12345"
        className="TA_cdsratingsonlynarrow flex justify-center py-6"
      ></div>
    </div>
  );
}

export default Reviews;
