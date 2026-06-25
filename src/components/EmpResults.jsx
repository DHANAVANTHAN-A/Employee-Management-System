import React, { useState, useEffect } from "react";
import {
  getall,
  updateEmployee,
  deleteEmployee,
} from "./empapi/empservice";

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [editId, seteditId] = useState(-1);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    department: "",
    joiningDate: "",
    phone: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await getall();
    setEmployees(res.data);
  };

  const handleEdit = (emp) => {
    seteditId(emp.id);

    setEditData({
      id: emp.id,
      name: emp.name,
      department: emp.department,
      joiningDate: emp.joiningDate,
      phone: emp.phone,
    });
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    await updateEmployee(editId, editData);

    setEmployees(
      employees.map((emp) =>
        emp.id === editId ? editData : emp
      )
    );

    seteditId(-1);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Department</th><th>Joining Date</th><th>Phone</th><th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) =>
          emp.id === editId ? (
            <tr key={emp.id}>
              <td>{emp.id}</td>

              <td><input name="name" value={editData.name} onChange={handleChange} /></td>

              <td><input name="department" value={editData.department} onChange={handleChange} /></td>

              <td>
                <input
                  type="date"
                  name="joiningDate"
                  value={editData.joiningDate}
                  onChange={handleChange}
                />
              </td>

              <td><input name="phone" value={editData.phone} onChange={handleChange} /></td>

              <td>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => seteditId(-1)}>Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.joiningDate}</td>
              <td>{emp.phone}</td>

              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default ListEmployees;