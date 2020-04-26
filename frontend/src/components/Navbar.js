import React from 'react'
import {Link} from 'react-router-dom'

// LIST TANYA : SHOWADD, COL, IF NO IMAGE-GIVE IMAGE DEFAULT HOW?, HABIS ADD HARUS REFRESH BARU BISA, ADD-EDIT-ERASE(PROBLEM)

export default function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link class="navbar-brand" to="/">FD-LIBRARY</Link >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">

    {/* <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/BooksList">List Buku</Link >
      </li>
    </ul> */}

<button type="button" class="btn btn-secondary mr-auto"><Link to="/BooksList">List of Books</Link></button>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search The Book you Want Here!"/>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}