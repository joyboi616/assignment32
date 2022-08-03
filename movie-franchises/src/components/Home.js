import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { NavLink } from 'react-router-dom';
import { adddata, deldata, updatedata } from './context/ContextProvider';

const Home = () => {

  const [getuserdata, setUserdata] = useState([]);
  /* console.log(getuserdata); */

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata)

  const { dltdata, setDLTdata } = useContext(deldata);

  const getdata = async (e) => {
    e.preventDefault();

    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
      console.log("Got added");

    }
  }

  useEffect(() => {
    getdata();
  }, [])

  const deleteuser = async (id) => {

    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("User deleted");
      setDLTdata(deletedata)
      getdata();
    }

  }

  return (

    <>

      {
        udata ?
          <>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{udata.name}</strong>  Added succesfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }
      {
        updata ?
          <>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{updata.name}</strong>  Updated succesfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }

      {
        dltdata ?
          <>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{dltdata.name}</strong>  Deleted succesfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }

      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> User added successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

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
                <th scope="col">Age</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Job</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>steban</td>
                <td>steban@gmail.com</td>
                <td>22</td>
                <td>3138470323</td>
                <td>Web Developer</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger" onClick={deleteuser}><DeleteOutlineSharpIcon /></button>
                </td>
              </tr>
              {
                getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.age}</td>
                        <td>{element.phone}</td>
                        <td>{element.job}</td>
                        <td className="d-flex justify-content-between">
                          <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                          <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon /></button></NavLink>
                          <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineSharpIcon /></button>
                        </td>
                      </tr>
                    </>
                  )
                })
              }


              {/* <tr>
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
            </tr> */}
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
    </>
  )
}

export default Home