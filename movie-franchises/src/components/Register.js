import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

  const { udata, setUdata } = useContext(adddata);

  const history = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    job: ""
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

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, job } = inpval;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, job
      })
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");

    } else {
      alert("data added");
      history.push("/")
      setUdata(data)
      console.log("Data added");

    }
  }

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
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
          <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register