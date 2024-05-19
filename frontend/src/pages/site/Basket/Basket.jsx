import React from 'react'
import "./Basket.css"

const Basket = () => {
  return (
    
       <div className="container">
      <table className="table mt-5 table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}>
              <td>
                <img width={"60px"} height={"60px"} src={item.image} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => handleAdd(item.id)}>
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default Basket
