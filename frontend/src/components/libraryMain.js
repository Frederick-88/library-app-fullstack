import React from "react";
import {Link} from 'react-router-dom'
import ReadPng from "../inspirations-assets/read.png";
import ListOfBooks from "./ListBooks/Books"
import "./style.css";

export default function libraryMain() {
  return (
    <div className="container ">

      <div class="jumbotron p-0 mb-0 ml-0 row">

        <div className="col ml-5 pt-4 mt-4">
          <h1 class="display-4">Hello, Smart People!</h1>
          <p class="lead">
            Welcome to FD-LIBRARY, where all books are free to borrow. Let's
            share the knowledge with everyone to make every one of us become better!
          </p>
          <hr class="my-4" />
         
          <Link to="/BooksList"><button type="button" class="btn btn-primary btn-fx pl-3 pr-3">
            Check Our List of Books
          </button></Link>
        </div>

        <div className="col text-center">
          <img src={ReadPng} className="w-75" alt="..." />
        </div>
      </div>

      <div className="div-bg-2 pb-4">
          
        <div className="row">
          <div className="col">
            <h1 className="header-hot-1 pt-3 mb-2 pl-5">Hot Books</h1>
          </div>
          <div className="col text-center">
          <Link to="/BooksList"><button
              type="button "
              class="btn btn-primary btn-fx pl-3 pr-3 mt-4">
              See More of Our Hot Books
              <i class="fas fa-arrow-right pl-3"></i>
            </button></Link>
          </div>
        </div>

        <hr className="hr-fx mb-4" />

{/* CARD CAROUSEL 1 */}
        <div className="row">
          {/* PENGULANGAN PAKAI BAHAN DARI BOOKS ITU, DITAMBAH DENGAN KONDISI FOR I<5. */}

          <div className="col">
            <div class="card mb-3">
              <h3 class="card-header">Book Title</h3>
              <img className="img-carousel" src={ReadPng} alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <b> Synopsis : </b> Some quick example text to build on the card title and make up
                  the bulk of the card's content.<br/>
                  <b> Year : </b> 2000<br/>
                  <b> Status : </b> Available<br/>
                  <b> Code : </b> 08129238
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card mb-3">
              <h3 class="card-header">Book Title</h3>
              <img className="img-carousel" src={ReadPng} alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <b> Synopsis : </b> Some quick example text to build on the card title and make up
                  the bulk of the card's content.<br/>
                  <b> Year : </b> 2000<br/>
                  <b> Status : </b> Available<br/>
                  <b> Code : </b> 08129238
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card mb-3">
              <h3 class="card-header">Book Title</h3>
              <img className="img-carousel" src={ReadPng} alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <b> Synopsis : </b> Some quick example text to build on the card title and make up
                  the bulk of the card's content.<br/>
                  <b> Year : </b> 2000<br/>
                  <b> Status : </b> Available<br/>
                  <b> Code : </b> 08129238
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card mb-3">
              <h3 class="card-header">Book Title</h3>
              <img className="img-carousel" src={ReadPng} alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <b> Synopsis : </b> Some quick example text to build on the card title and make up
                  the bulk of the card's content.<br/>
                  <b> Year : </b> 2000<br/>
                  <b> Status : </b> Available<br/>
                  <b> Code : </b> 08129238
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card mb-3">
              <h3 class="card-header">Book Title</h3>
              <img className="img-carousel" src={ReadPng} alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <b> Synopsis : </b> Some quick example text to build on the card title and make up
                  the bulk of the card's content.<br/>
                  <b> Year : </b> 2000<br/>
                  <b> Status : </b> Available<br/>
                  <b> Code : </b> 08129238
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="div-bg-2">
          
          <div className="row">
            <div className="col">
              <h1 className="header-hot-1 pt-3 mb-2 pl-5">Available Books</h1>
            </div>
            <div className="col text-center">
            <Link to="/BooksList"><button
                type="button "
                class="btn btn-primary btn-fx pl-3 pr-3 mt-4">
                Check out the Available Books!
                <i class="fas fa-arrow-right pl-3"></i>
              </button></Link>
            </div>
          </div>
  
          <hr className="hr-fx mb-4" />
  
  {/* CARD CAROUSEL 2 */}
          <div className="row mb-4">
  
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">Book Title</h3>
                <img className="img-carousel" src={ReadPng} alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    <b> Synopsis : </b> Some quick example text to build on the card title and make up
                    the bulk of the card's content.<br/>
                    <b> Year : </b> 2000<br/>
                    <b> Status : </b> Available<br/>
                    <b> Code : </b> 08129238
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">Book Title</h3>
                <img className="img-carousel" src={ReadPng} alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    <b> Synopsis : </b> Some quick example text to build on the card title and make up
                    the bulk of the card's content.<br/>
                    <b> Year : </b> 2000<br/>
                    <b> Status : </b> Available<br/>
                    <b> Code : </b> 08129238
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">Book Title</h3>
                <img className="img-carousel" src={ReadPng} alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    <b> Synopsis : </b> Some quick example text to build on the card title and make up
                    the bulk of the card's content.<br/>
                    <b> Year : </b> 2000<br/>
                    <b> Status : </b> Available<br/>
                    <b> Code : </b> 08129238
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">Book Title</h3>
                <img className="img-carousel" src={ReadPng} alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    <b> Synopsis : </b> Some quick example text to build on the card title and make up
                    the bulk of the card's content.<br/>
                    <b> Year : </b> 2000<br/>
                    <b> Status : </b> Available<br/>
                    <b> Code : </b> 08129238
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col">
              <div class="card mb-3">
                <h3 class="card-header">Book Title</h3>
                <img className="img-carousel" src={ReadPng} alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    <b> Synopsis : </b> Some quick example text to build on the card title and make up
                    the bulk of the card's content.<br/>
                    <b> Year : </b> 2000<br/>
                    <b> Status : </b> Available<br/>
                    <b> Code : </b> 08129238
                  </p>
                </div>
              </div>
            </div>
  
  
          </div>
        </div>
    
    
    
    </div>
  );
}
