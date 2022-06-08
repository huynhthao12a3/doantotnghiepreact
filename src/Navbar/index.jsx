import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./navbar.css";
import * as $ from 'jquery'
Navbar.propTypes = {

};

function Navbar(props) {


    useEffect(() => {

        renderCountCart();
    }, [])



    /*Render count số lượng trên giỏ hanhg, vs dropwdow danh sách sản phẩm khi click vao gio hang*/
    function renderCountCart() {
        let myCart = getMyCart();
        // Render dropdow list
        let Count = 0;// số lượng sp trong giỏ
        for (var i = 0; i < myCart.length; i++) {
            Count += myCart[i].Quantity;
        }
        if (Count > 0) {
            $(".cart-count").removeClass("d-none ");
            if (Count > 99)
                Count = "99+";
            $('.cart-count').html(Count);
            $('.cart-count').show();
        }
        else {
            $('.cart-count').hide();
        }
    }

    /*Thêm sản phẩm vào giỏ hàng*/
    /*Trương hợp thêm trong trang chi tiết sản phẩm có số lượng quantity*/
    function AddToCart(productId, quantity = null) {
        let myCart = getMyCart();
        let isExist = false;

        // Sản phẩm có trong giỏ
        for (var i = 0; i < myCart.length; i++) {
            if (myCart[i].ProductId == productId) {
                myCart[i].Quantity = (myCart[i].Quantity + (quantity == null ? 1 : quantity));
                isExist = true;
            }
        }

        // if (!isExist) {// Nếu sản phẩm chưa có trong giỏ
        //     ajaxGet('Product/ById/' + productId, null, function (res) {
        //         if (res.IsSuccess) {
        //             var data = res.Result;
        //             console.log(data);
        //             var item = {
        //                 ProductId: data.Id,
        //                 ThumbNail: data.ThumbNail,
        //                 ProductName: data.ProductName,
        //                 Quantity: quantity == null ? 1 : quantity,
        //                 OriginPrice: data.OriginPrice,
        //                 SaleOffPrice: data.SaleOffPrice,
        //                 SalePrice: data.SalePrice,
        //                 FriendlyUrl: data.FriendlyUrl
        //             }
        //             myCart.push(item);
        //         }
        //     }, null, false);
        // }
        setMyCart(myCart);
        renderCountCart();
    }



    /*Lấy giỏ hàng*/
    function getMyCart() {
        let myCartJson = localStorage.getItem("myCart");
        if (myCartJson == "" || myCartJson == null || myCartJson == 'null')
            return [];
        else {
            return JSON.parse(myCartJson);
        }
    }

    /*Thêm hàng giỏ hàng*/
    function setMyCart(myCart) {
        localStorage.setItem('myCart', JSON.stringify(myCart));
    }
    return (
        <nav id="navbar-menu" className="navbar navbar-light navbar-expand-lg btn-gradient-blue bg-faded osahan-menu osahan-menu-top-2 p-lg-2">
            <div className="container pl-0 pr-0">
                <div className="justify-content-between d-flex w-100">
                    <div className="d-flex align-items-center justify-content-center">
                        <a className="navbar-brand text-center d-none d-lg-block" href="/"><img src="https://dienmaycongthanh.vn/Upload/Logo_thuong_hieu_vs_danh_muc/logo_2.png" id="logo-top-nav" width="200" height="75" alt="Điện máy Công Thành" /></a>
                    </div>
                    <div className="list-social w-100">
                        <div className="navbar-collapse justify-content-between d-flex d-lg-block" id="navbarNavDropdown">
                            <a className="navbar-brand d-block d-lg-none text-center" href="/"><img src="https://dienmaycongthanh.vn/Upload/Logo_thuong_hieu_vs_danh_muc/logo_2.png" id="logo-top-nav" width="50" alt="Điện máy Công Thành" /></a>
                            <div className="d-flex w-100 flex-row justify-content-between align-items-center">
                                <div className="navbar-nav mt-2 mt-lg-0 top-categories-search-main w-70 ml-3 mr-1">
                                    <div className="w-100 top-categories-search ml-auto">
                                        <div className="input-group">
                                            <input id="ipt-search-layout" className="form-control" placeholder="Bạn tìm gì..." />
                                            <span className="input-group-btn input-group-btn-search">
                                                <button className="btn bg-transparent shadow-none border-0 mt-0 mb-0" type="button"><i className="icofont icofont-search-1"></i></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="navbar-toggler navbar-toggler-white d-block d-lg-none mr-1" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="my-2 my-lg-0 w-100">
                                    <div className="d-none d-lg-block w-100">
                                        <div className="d-flex flex-row align-items-center justify-content-between float-right w-100">
                                            <div className="d-flex align-items-center div-cart-homepage">
                                                <div className="d-block d-md-none">
                                                    <a href="https://doantotnghiep.azurewebsites.net/gio-hang" className="border-2 border-primary btn ptn-primary" id="btn-my-cart" style={{ padding: "6px 9px", position: "relative" }} aria-haspopup="true" aria-expanded="false">
                                                        <i className="icofont icofont-shopping-cart" style={{ fontSize: "20px" }}></i><small className="d-none cart-count">0</small>
                                                    </a>
                                                </div>
                                                <div className="d-none d-md-block">
                                                    <a href="https://doantotnghiep.azurewebsites.net/gio-hang" className="border-2 border-primary btn ptn-primary" id="btn-my-cart" style={{ padding: "6px 9px", position: "relative" }} aria-haspopup="true" aria-expanded="false">
                                                        <i className="icofont icofont-shopping-cart" style={{ fontSize: "20px", color: "#1b439a" }}></i><small className="d-none cart-count">0</small>
                                                        <span>Giỏ hàng</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item align-items-center mx-2">
                                                <div className="icon text-primary text-center "><i className="icofont icofont-grocery font-24"></i></div>
                                                <div className="text text-primary text-center font-12"><span>Trả góp 0%</span></div>
                                            </div>
                                            <div className="item align-items-center mx-2">
                                                <div className="icon  text-primary text-center"><i className="icofont icofont-repair  font-24 "></i></div>
                                                <div className="text text-primary text-center font-12"><span>Bảo hành 1 đổi 1</span></div>
                                            </div>
                                            <div className="item align-items-center mx-2 ">
                                                <div className="icon text-primary text-center "><i className="icofont icofont-headphone-alt-2 font-24"></i></div>
                                                <div className="text text-primary text-center font-12"><a href="tel:0989163020">0989163020</a></div>
                                            </div>
                                            <div className="item align-items-center mx-2 ">
                                                <div className="icon  text-primary text-center "><i className="icofont icofont-shield font-24"></i></div>
                                                <div className="text text-primary text-center font-12"><span>Cam kết hàng chính hãng 100%</span></div>
                                            </div>




                                        </div>
                                    </div>
                                    <div className="d-block d-lg-none">
                                        <ul className="list-inline main-nav-right">
                                            <li className="list-inline-item dropdown osahan-top-dropdown">
                                                <a href="https://doantotnghiep.azurewebsites.net/gio-hang" className="btn btn-outline-light" id="btn-my-cart" style={{ padding: "6px 9px" }} aria-haspopup="true" aria-expanded="false">
                                                    <i className="icofont icofont-shopping-cart" style={{ fontSize: "20px" }}></i><small className="d-none cart-count">0</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;