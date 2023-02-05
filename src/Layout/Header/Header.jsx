import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
    faBasketShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("logo")}>
                MURO<span>EXE</span>
            </div>
            <div className={cx("nav")}>
                <Space size={30}>
                    <h3>Sales</h3>
                    <h3>Sneakers</h3>
                    <h3>Shoes</h3>
                    <h3>Boots</h3>
                    <h3>Slippers</h3>
                    <h3>Accesories</h3>
                </Space>
            </div>
            <div className={cx("action")}>
                <Space size={20}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className={cx("icon")}
                    />
                    <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                    <FontAwesomeIcon
                        icon={faBasketShopping}
                        className={cx("icon")}
                    />
                </Space>
            </div>
        </div>
    );
};

export default Header;
