import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
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
            <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
            <input type="text" value={inpval.work} onChange={setdata} name="work" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Edit