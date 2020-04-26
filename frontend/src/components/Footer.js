import React from "react";
import {useFormik} from "formik"
import axios from "axios"

import Logo from "../inspirations-assets/email.png";

export default function Footer() {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post("http://localhost:8500/dataEmail", values )
      .then((respond) => {
        window.alert("BERHASIL MENAMBAH DATA.");
        console.log(respond.data);
        
      });
    },
  });
  return (
    <div className="container">
        
      <div className="row pt-4 pb-4">
        <div className="col-6 text-center ">
        <h2 className="text-white">STAY IN TOUCH WITH US IN EMAIL !</h2>
        <div>
        <img src={Logo} className="img-maps" alt="..."/></div>
        </div>
        
        <div className="col-6 pt-4">
        <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
            <label for="exampleInputPassword1"className="h5 text-white">Your Name</label>
            <input
              type="text"
              class="form-control pt-2 pb-2 form-control-lg"
              id="exampleInputPassword1"
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" className="h5 text-white">EMAIL ADDRESS</label>
            <input
              type="email"
              class="form-control form-control-lg"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <small id="emailHelp" class="form-text h6 text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
         

          <button type="submit" class="btn btn-lg btn-secondary mt-4 btn-fx-2 w-100 font-weight-bold">
            SUBMIT
          </button>
          </form>
        </div>
      </div>

    </div>
  );
}