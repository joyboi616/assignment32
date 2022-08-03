import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
  import { updatedata } from './context/ContextProvider'

const Edit = () => {
  /* const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata); */

  const { updata, setUPdata } = useContext(updatedata)

  const history = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    job: "",
  })

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {

    const res = await fetch(`/getuser/${id}`, {
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
      setINP(data)
      console.log("get data");

    }
  }

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, job } = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, job
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("Fill the data");
    } else {
      alert("Data added");
      history.push("/")
      setUPdata(data2);
    }

  }

  return (
    <div className="container">
      <NavLink to="/">Home 2</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-mb-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3 col-lg-6 col-mb-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 col-lg-6 col-mb-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
            <input type="text" value={inpval.age} onChange={setdata} name="age" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 col-lg-6 col-mb-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
            <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 col-lg-6 col-mb-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">Job</label>
            <input type="text" value={inpval.job} onChange={setdata} name="job" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Edit