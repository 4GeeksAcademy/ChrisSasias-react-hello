import React from "react";



//create your first component
const Navbar = () => {
	return (
    <div >
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid px-5">
    <a class="navbar-brand" href="#">Start Boostrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="#">Home</a>
        </li>   
        <li class="nav-item">
          <a class="nav-link" href="#">Abaut</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>        
      </ul>
    </div>
  </div>
</nav>
  </div>       
	);
};

export default Navbar;