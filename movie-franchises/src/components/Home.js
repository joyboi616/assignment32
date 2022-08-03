import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className='btn btn-primary'>Add data</NavLink>
        </div>

        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>meet</td>
              <td>meet@gmail.com</td>
              <td>@Webdeveloper</td>
              <td>9191919191919</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                <button className="btn btn-primary"><CreateIcon /></button>
                <button className="btn btn-danger"><DeleteOutlineSharpIcon /></button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>meet</td>
              <td>meet@gmail.com</td>
              <td>@Webdeveloper</td>
              <td>9191919191919</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                <button className="btn btn-primary"><CreateIcon /></button>
                <button className="btn btn-danger"><DeleteOutlineSharpIcon /></button>
              </td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home