import React, { useState } from "react";


const CloseIfaDropdown = ({ title,title_1, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-3 border rounded-5"
      style={{ background: open ? "#74b117" : "#F3F3F3" }}
    >
      <button
        className="w-100 text-start py-3 px-4 border-0 bg-transparent d-flex align-items-center justify-content-between"
        onClick={() => setOpen((prev) => !prev)}
        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#251804" }}
      >
        <span className="py-2 fs-3 text-dark fw-bold"> 
            {title}
            <span className="ms-3 py-0 fs-5 text-dark fw-bold">{title_1}</span>
            </span>
            
        <span className="toggle-icon" style={{ fontSize: "2rem", marginRight: "1rem" }}>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-3 pt-" style={{ color: "#251804" }}>
          <hr className="mx-3" />
          {children}
        </div>
      )}
    </div>
  );
};

export default CloseIfaDropdown;
