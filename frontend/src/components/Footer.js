import React from "react";
import { Link } from "react-router-dom";
import Logo from "../inspirations-assets/email.png";

export default function Footer() {
  return (
    <div className="container">
        
      <div className="row pt-4 pb-4">
        <div className="col-6 text-center ">
        <h2 className="text-white">STAY IN TOUCH WITH US IN EMAIL !</h2>
        <div>
        <img src={Logo} className="img-maps" alt="..."/></div>
        </div>
        
        <div className="col-6 pt-4">
        <div class="form-group">
            <label for="exampleInputPassword1"className="h5 text-white">Your Name</label>
            <input
              type="password"
              class="form-control pt-2 pb-2 form-control-lg"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" className="h5 text-white">EMAIL ADDRESS</label>
            <input
              type="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text h6 text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
         

          <button type="button" class="btn btn-lg btn-secondary mt-4 btn-fx-2 w-100 font-weight-bold">
            SUBMIT
          </button>

        </div>
      </div>

    </div>
  );
}