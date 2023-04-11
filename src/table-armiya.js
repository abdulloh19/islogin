import React from "react";
import "./table.css";

class TableArmiya extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "John",
          lastName: "Uik",
          age: 15,
          number: 100,
          city: "Dubai",
          state: "IL",
          salary: "2000",
          Delete: "Delete",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          age: 20,
          number: 500,
          city: "Malayziya",
          state: "IA",
          salary: "2000",
          Delete: "Delete",
        },
        {
          id: 3,
          firstName: "Zubayr",
          lastName: "Avvon",
          age: 10,
          number: 400,
          city: "Arabia",
          state: "IL",
          salary: "3000",
          Delete: "Delete",
        },
        {
          id: 4,
          firstName: "Sumayya",
          lastName: "Sumayya",
          age: 20,
          number: 100,
          city: "Uzbek",
          state: "IL",
          salary: "1000",
          Delete: "Delete",
        },
        {
          id: 5,
          firstName: "John",
          lastName: "Smith",
          age: 45,
          number: 100,
          city: "Kaliforniya",
          state: "IL",
          salary: "1000",
          Delete: "Delete",
        },
        {
          id: 6,
          firstName: "John",
          lastName: "vash",
          age: 52,
          number: 100,
          city: "Kaliforniya",
          state: "IL",
          salary: "1000",
          Delete: "Delete",
        },
      ],
    };
  }

  click = () => {
    const userArr = this.state.users;
    const a = userArr.filter((item) => item.age >= 18);
    if (true)
      this.setState({
        users: a,
      });
  };

  onDelete = (id) => {
    const newData = this.state.users.filter((item) => item.id !== id);
    this.setState({
      users: newData,
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-outline-secondary mb-5 mt-4"
          onClick={this.click}
        >
          Armiyaga qabul qilish
        </button>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No_</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Dept_Number</th>
              <th>City</th>
              <th>State</th>
              <th>Salary</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.number}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.salary}</td>
                <td>
                  <button
                    onClick={() => this.onDelete(item.id)}
                    className="btn btn-outline-danger del"
                  >
                    {item.Delete}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableArmiya;

// import React, { Component } from "react";

// class DataTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { id: 1, name: "John", age: 25 },
//         { id: 2, name: "Jane", age: 30 },
//         { id: 3, name: "Bob", age: 35 },
//       ],
//     };
//   }

//   handleDelete = (id) => {
//     const newData = this.state.data.filter((item) => item.id !== id);
//     this.setState({ data: newData });
//   };

//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>
//                 <button onClick={() => this.handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default DataTable;
