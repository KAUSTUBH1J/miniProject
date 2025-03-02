import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const index = ({ title, amount, category, date }) => {
  return (
    <div className="card mb-3 shadow-sm border-primary" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
          <h2 className="text-success">${amount}</h2>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <strong>Category:</strong> {category}
            </p>
            <p className="card-text">
              <small className="text-muted">{date}</small>
            </p>
            <button className="btn btn-danger btn-sm me-2"><DeleteIcon/></button>
            <button className="btn btn-primary btn-sm"><EditIcon/></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default index;
