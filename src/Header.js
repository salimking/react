import React, { Component } from 'react'
import './style.css'
export default class Header extends Component {
  render() {
    return (
      <div >
   
  {/* Header Start */}
  <div className="row" style={{backgroundColor:"#0d6efd"}}>
      <div className="col fixed-top bg-white">
      <header>
  <div className="header-area ">
    <div className="main-header ">
     <div className="header-bottom  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" />Salim</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
              {/* Main-menu */}
              <div className="main-menu f-right d-none d-lg-block">
                <nav>                                                
                  <ul id="navigation">                                                                                                                                     
                    <li><a href="index.html">Home</a></li>
                    <li><a href="Catagori.html">Product</a></li>
                    <li className="hot"><a href="#">Latest</a>
                      <ul className="submenu">
                        <li><a href="product_list.html"> Product list</a></li>
                        <li><a href="single-product.html"> Product Details</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a>
                      <ul className="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Category</a>
                      <ul className="submenu">
                        <li><a href="login.html">Man</a></li>
                        <li><a href="cart.html">Woman</a></li>
                        <li><a href="elements.html">New</a></li>
                        
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div> 
            <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
              <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                <li className="d-none d-xl-block">
                  <div className="form-box f-right ">
                    <input type="text" name="Search" placeholder="Search products" />
                    <div className="search-icon">
                      <i className="fas fa-search special-tag" />
                    </div>
                  </div>
                </li>
                <li className=" d-none d-xl-block">
                  <div className="favorit-items">
                    <i className="far fa-heart" />
                  </div>
                </li>
                <li>
                  <div className="shopping-card">
                    <a href="cart.html"><i className="fas fa-shopping-cart" /></a>
                  </div>
                </li>
                <li className="d-none d-lg-block"> <a href="#" className="btn header-btn">Sign in</a></li>
              </ul>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>                                                                                                                                     
                    <li><a href="index.html" role="menuitem" tabIndex={-1}>Home</a></li>
                    <li><a href="Catagori.html" role="menuitem" tabIndex={-1}>Catagori</a></li>
                    <li className="hot slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: 'none'}} /><a href="#" tabIndex={-1}>Latest</a>
                      <span className="slicknav_arrow">+</span><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                        <li><a href="product_list.html" role="menuitem" tabIndex={-1}> Product list</a></li>
                        <li><a href="single-product.html" role="menuitem" tabIndex={-1}> Product Details</a></li>
                      </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: 'none'}} /><a href="blog.html" tabIndex={-1}>Blog</a>
                      <span className="slicknav_arrow">+</span><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                        <li><a href="blog.html" role="menuitem" tabIndex={-1}>Blog</a></li>
                        <li><a href="single-blog.html" role="menuitem" tabIndex={-1}>Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: 'none'}} /><a href="#" tabIndex={-1}>Pages</a>
                      <span className="slicknav_arrow">+</span><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                        <li><a href="login.html" role="menuitem" tabIndex={-1}>Login</a></li>
                        <li><a href="cart.html" role="menuitem" tabIndex={-1}>Card</a></li>
                        <li><a href="elements.html" role="menuitem" tabIndex={-1}>Element</a></li>
                        <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                        <li><a href="confirmation.html" role="menuitem" tabIndex={-1}>Confirmation</a></li>
                        <li><a href="cart.html" role="menuitem" tabIndex={-1}>Shopping Cart</a></li>
                        <li><a href="checkout.html" role="menuitem" tabIndex={-1}>Product Checkout</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                  </ul></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>


      </div>

  </div>
 
     
   {/* <div class="row">
    <nav class="navbar navbar-light navbar-expand-md navigation-clean-search fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Salim</a>
            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse justify-content-center " id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Products</a></li>

                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                    <li class="nav-item" id="cart"><a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i></a></li>


                            
                                        
                                       
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Man</a></li>
                            <li><a class="dropdown-item" href="#">Woman</a></li>
                            
                            <li><a class="dropdown-item" href="#">New</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>

                </ul>

                <ul class="navbar-nav md-6 sm-6 " id="s">
                    <form class="me-auto search-form" target="_self">
                        <div class="d-flex align-items-center ">
                            <label class="form-label d-flex mb-0" for="search-field"><i class="fa fa-search "></i></label><input class="form-control " type="search" id="search-field" name="search" />
                        </div>
                    </form>
                    <a class="btn btn-light action-button sm-1 md-1" role="button" href="#">Search </a>
                </ul>
            </div>
        </div>
    </nav>
</div>
</div> */}

</div>
    )
  }
}
