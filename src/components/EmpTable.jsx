import React, { useState } from "react";
import axios from "axios";

const EmpTable = () => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    department: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const empfunction = async () => {
    try {
       await axios.post(
          "http://localhost:8080/api/save",
          employee );
          
      setEmployee({
        id: "",
        name: "",
        phone: "",
        department: "",
        joiningDate: "",
      });

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Department</th><th>Joining Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><input name="id" value={employee.id} onChange={handleChange} /></td>
            <td><input name="name" value={employee.name} onChange={handleChange} /></td>
            <td><input name="phone" value={employee.phone} onChange={handleChange} /></td>
            <td><input name="department" value={employee.department} onChange={handleChange} /></td>
            <td>
              <input
                type="date"
                name="joiningDate"
                value={employee.joiningDate}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={empfunction}>Submit</button>
    </>
  );
};

export default EmpTable;