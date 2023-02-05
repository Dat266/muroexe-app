import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faBasketShopping,
    faChevronCircleLeft,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Image, Space } from "antd";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <>
            <div className={cx("image")}></div>
            <div className={cx("wrapper")}>
                <h2>Our Top Sales</h2>

                <div className={cx("caro")}>
                    <FontAwesomeIcon
                        className={cx("icon-left")}
                        icon={faChevronLeft}
                    />
                    <div className={cx("card")}>
                        <div className={cx("sale")}>-40%</div>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx("icon")}
                        />
                        <Image
                            src="https://eu.muroexe.com/68080-home_default/materia-mod-camel.jpg"
                            width={228}
                            preview={false}
                        />
                        <div className={cx("sub-image")}>
                            <Image
                                src="https://eu.muroexe.com/68153-cart_default/materia-mod-camel.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68143-cart_default/materia-mod-blue.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68149-cart_default/materia-mod-sand.jpg"
                                preview={false}
                                width={50}
                            />
                        </div>

                        <div className={cx("title")}>
                            <div className={cx("name")}>
                                <h2>MATERIA MOD CAMEL</h2>
                                <h3>
                                    $90.00 <span>$149.00</span>
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={cx("cart-icon")}
                            />
                        </div>
                    </div>
                    <div className={cx("card")}>
                        <div className={cx("sale")}>-40%</div>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx("icon")}
                        />
                        <Image
                            src="https://eu.muroexe.com/68080-home_default/materia-mod-camel.jpg"
                            width={228}
                            preview={false}
                        />
                        <div className={cx("sub-image")}>
                            <Image
                                src="https://eu.muroexe.com/68153-cart_default/materia-mod-camel.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68143-cart_default/materia-mod-blue.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68149-cart_default/materia-mod-sand.jpg"
                                preview={false}
                                width={50}
                            />
                        </div>

                        <div className={cx("title")}>
                            <div className={cx("name")}>
                                <h2>MATERIA MOD CAMEL</h2>
                                <h3>
                                    $90.00 <span>$149.00</span>
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={cx("cart-icon")}
                            />
                        </div>
                    </div>
                    <div className={cx("card")}>
                        <div className={cx("sale")}>-40%</div>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx("icon")}
                        />
                        <Image
                            src="https://eu.muroexe.com/68080-home_default/materia-mod-camel.jpg"
                            width={228}
                            preview={false}
                        />
                        <div className={cx("sub-image")}>
                            <Image
                                src="https://eu.muroexe.com/68153-cart_default/materia-mod-camel.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68143-cart_default/materia-mod-blue.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68149-cart_default/materia-mod-sand.jpg"
                                preview={false}
                                width={50}
                            />
                        </div>

                        <div className={cx("title")}>
                            <div className={cx("name")}>
                                <h2>MATERIA MOD CAMEL</h2>
                                <h3>
                                    $90.00 <span>$149.00</span>
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={cx("cart-icon")}
                            />
                        </div>
                    </div>
                    <div className={cx("card")}>
                        <div className={cx("sale")}>-40%</div>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx("icon")}
                        />
                        <Image
                            src="https://eu.muroexe.com/68080-home_default/materia-mod-camel.jpg"
                            width={228}
                            preview={false}
                        />
                        <div className={cx("sub-image")}>
                            <Image
                                src="https://eu.muroexe.com/68153-cart_default/materia-mod-camel.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68143-cart_default/materia-mod-blue.jpg"
                                preview={false}
                                width={50}
                            />
                            <Image
                                src="https://eu.muroexe.com/68149-cart_default/materia-mod-sand.jpg"
                                preview={false}
                                width={50}
                            />
                        </div>

                        <div className={cx("title")}>
                            <div className={cx("name")}>
                                <h2>MATERIA MOD CAMEL</h2>
                                <h3>
                                    $90.00 <span>$149.00</span>
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={cx("cart-icon")}
                            />
                        </div>
                    </div>
                    <FontAwesomeIcon
                        className={cx("icon-right")}
                        icon={faChevronRight}
                    />
                </div>

                <div className={cx("image-four")}>
                    <Image
                        src="https://eu.muroexe.com/img/cms/HOME%20EN/2023-01/2.jpg"
                        width={643}
                        preview={false}
                    />
                    <Image
                        src="https://eu.muroexe.com/img/cms/HOME%20EN/2023-01/Essential.jpg"
                        width={643}
                        preview={false}
                    />
                    <Image
                        src="https://eu.muroexe.com/img/cms/HOME%20EN/2023-01/Outdoor.jpg"
                        width={643}
                        preview={false}
                    />
                    <Image
                        src="https://eu.muroexe.com/img/cms/HOME%20EN/2023-01/Indoor.jpg"
                        width={643}
                        preview={false}
                    />
                </div>

                <div className={cx("nav-image")}>
                    <div className={cx("item")}>
                        <Image
                            src="https://eu.muroexe.com/img/cms/HOME%20ES/iconos/envio-express.png"
                            width={150}
                            preview={false}
                        />
                        <h3>Free Shipping 3-5 days</h3>
                        <p>Free shipping from 110€. Delivery in 3-5 days</p>
                    </div>
                    <div className={cx("item")}>
                        <Image
                            src="https://eu.muroexe.com/img/cms/HOME%20ES/iconos/pago.png"
                            width={150}
                            preview={false}
                        />
                        <h3>100% Secure Payment</h3>
                        <p>We offer several 100% secure payment methods</p>
                    </div>
                    <div className={cx("item")}>
                        <Image
                            src="https://eu.muroexe.com/img/cms/HOME%20ES/iconos/ATC.png"
                            width={150}
                            preview={false}
                        />
                        <h3>Customer service</h3>
                        <p>
                            Solve your doubts with our customer service
                            department.
                        </p>
                    </div>
                </div>
                <div
                    style={{ display: "flex", gap: "30px", lineHeight: "50px" }}
                >
                    <video
                        src="https://eu.muroexe.com/img/cms/Video-Intro.mp4"
                        width={650}
                        autoPlay
                        controls
                    ></video>
                    <div>
                        <h4> About Us </h4>{" "}
                        <div
                            style={{
                                fontWeight: "400",
                                fontSize: "0.8rem",
                            }}
                        >
                            <p>
                                We create technical and minimalist products for
                                everyday life.
                            </p>{" "}
                            <p>
                                All our products are vegan and with a strong
                                sustainable component.
                            </p>{" "}
                            <p>
                                Also, we involve our user in all creative
                                processes to create the perfect product,
                                designed by and for them.
                            </p>{" "}
                            <p>
                                {" "}
                                We are design. We are comfort. We are
                                commitment.
                            </p>
                            <p>We are #DOTHEFUTURE</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
