import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div className="mt-5">
   <div class="row lg-12 md-8 sm-4 mt-5" >
        <div class="Banner">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner md-5 sm-2">
    <div class="carousel-item active">
      <img src="./assets/img/bg1.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <a href="industries.html" class="btn hero-btn" id="btn" data-delay="1s" data-animation="fadeInRight">Shop Now</a>
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/img/bg2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <a href="industries.html" class="btn hero-btn" id="btn">Shop Now</a>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./assets/img/bg3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <a href="industries.html" class="btn hero-btn" id="btn">Shop Now</a>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
      </div>

    )
  }
}
