import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <footer>
            <section className="footer-Content btn-gradient-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="block-title">Liên hệ</h3>
                                <div id="div-footer" className="textwidget">
                                    <div className="textwidget">
                                        <p><span className="text-white">ĐIỆN MÁY CÔNG THÀNH</span></p>
                                        <p>Địa chỉ: &nbsp;<span className="text-white">Số 12, đường CMT8, KP 4, Phường Thanh Bình, Thành phố Biên Hoà, Tỉnh Đồng Nai</span> </p>
                                        <p>MST: &nbsp;<span className="text-white">3603319521</span></p>
                                        <p>Hotline: &nbsp;<span className="text-white">0914196139</span> </p>
                                        <p>Số CSKH: &nbsp;<span className="text-white">0847800800</span></p>
                                        <p>Email: &nbsp;<span className="text-white">dienmaycongthanh@gmail.com</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="block-title">Quy định & Chính sách</h3>
                                <div className="textwidget a-footer">
                                    <p><a href="chinh-sach-bao-hanh">Chính sách bảo hành</a></p>
                                    <p><a href="chinh-sach-doi-tra">Chính sách đổi trả</a></p>
                                    <p><a href="chinh-sach-tra-gop">Chính sách trả góp</a></p>
                                    <p><a href="chinh-sach-van-chuyen-va-giao-hang">Chính sách vận chuyển và giao hàng</a></p>
                                    <p><a href="thong-tin-ve-cac-phuong-thuc-thanh-toan">Thông tin về các phương thức thanh toán</a></p>
                                    <p><a href="chinh-sach-bao-ve-thong-tin-khach-hang">Chính sách bảo vệ thông tin khách hàng</a></p>
                                </div>
                                <div className="text-left">
                                    <a href="@info.BoCongThuong_Url">
                                        <img className="img-bo-cong-thuong" src="https://doantotnghiep.azurewebsites.net/images/dathongbao_bocongthuong.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-widget">
                                        <h3 className="block-title"> Bản đồ</h3>
                                        <div className="textwidget">
                                            <div className="mapouter">
                                                <div className="gmap_canvas">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2175248098133!2d106.81497171526101!3d10.946934559015506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deacc5555555%3A0x16d3513b12f8f7d5!2zVHJ1bmcgVMOibSDEkGnhu4duIE3DoXkgQ8O0bmcgVGjDoG5o!5e0!3m2!1sen!2s!4v1615459760401!5m2!1sen!2s"
                                                        width="600" height="200" style={{ border: 0, width: "100%" }} allowFullScreen="" loading="lazy"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

        // <footer>
        //     <section className="footer-Content btn-gradient-blue">
        //         <div className="container footer-intro">
        //             <div className="row" >
        //                 <div className="col-lg-4 col-md-4 col-sm-4">
        //                     <div className="footer-widget">
        //                         <h3 className="block-title">Liên hệ</h3>
        //                         <div id="div-footer" className="textwidget">
        //                             <div className="textwidget">
        //                                 <p>ĐIỆN MÁY CÔNG THÀNH</p>
        //                                 <p>Địa chỉ: &nbsp;Số 12, đường CMT8, KP 4, Phường Thanh Bình, Thành phố Biên Hoà, Tỉnh Đồng Nai </p>
        //                                 <p>MST: &nbsp;3603319521</p>
        //                                 <p>Hotline: &nbsp;914196139</p>
        //                                 <p>Số CSKH: &nbsp;847800800</p>
        //                                 <p>Email: &nbsp;dienmaycongthanh@gmail.com</p>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-4 col-md-4 col-sm-4">
        //                     <div className="footer-widget">
        //                         <h3 className="block-title">Quy định & Chính sách</h3>
        //                         <div className="textwidget line-height-24x;">
        //                             <p className="height-24-px"><a href="chinh-sach-bao-hanh">Chính sách bảo hành</a></p>
        //                             <p className="height-24-px"><a href="chinh-sach-doi-tra">Chính sách đổi trả</a></p>
        //                             <p className="height-24-px"><a href="chinh-sach-tra-gop">Chính sách trả góp</a></p>
        //                             <p className="height-24-px"><a href="chinh-sach-van-chuyen-va-giao-hang">Chính sách vận chuyển và giao hàng</a></p>
        //                             <p className="height-24-px"><a href="thong-tin-ve-cac-phuong-thuc-thanh-toan">Thông tin về các phương thức thanh toán</a></p>
        //                             <p className="height-24-px"><a href="chinh-sach-bao-ve-thong-tin-khach-hang">Chính sách bảo vệ thông tin khách hàng</a></p>
        //                             <a href="@info.BoCongThuong_Url">
        //                                 <img className="img-bo-cong-thuong mb-2 mt-2" src="https://doantotnghiep.azurewebsites.net/images/dathongbao_bocongthuong.png" />
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-4 col-md-4 col-sm-12">
        //                     <div className="row">
        //                         <div className="col-md-4">

        //                         </div>
        //                         <div className="col-md-8">
        //                             <div className="footer-widget">
        //                                 <h3 className="block-title"> Bản đồ</h3>
        //                                 <div className="textwidget">
        //                                     <div className="mapouter">
        //                                         <div className="gmap_canvas">
        //                                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2175248098133!2d106.81497171526101!3d10.946934559015506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deacc5555555%3A0x16d3513b12f8f7d5!2zVHJ1bmcgVMOibSDEkGnhu4duIE3DoXkgQ8O0bmcgVGjDoG5o!5e0!3m2!1sen!2s!4v1615459760401!5m2!1sen!2s"
        //                                                 width="600" height="200" style={{ border: 0, width: "100%" }} allowFullScreen="" loading="lazy"></iframe>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </section>
        // </footer>
    );
}

export default Footer;