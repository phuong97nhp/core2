import { Link } from "react-router-dom";
import logo from '../../../public/assets-admin/img/logo.svg';

function Sidebar() {
    return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/cw-admin">
            <div className="mx-2">
                <img id="logo" src={logo} alt="Logo"/>
            </div>
        </Link>

        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
            <Link className="nav-link" to="/cw-admin/dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Bảng điều khiển</span>
            </Link>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Chức năng
        </div>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="#" data-toggle="collapse">
                <i className="fas fa-fw fa-cog"></i>
                <span>Bài viết</span>
            </Link>
            <div id="collapseTwo" className="collapse">
                <div className="bg-white py-2 collapse-inner rounded">
                    <Link className="collapse-item" to="buttons.html">Tất cả bài viết</Link>
                    <Link className="collapse-item" to="cards.html">Thêm bài viết</Link>
                    <Link className="collapse-item" to="cards.html">Thẻ bài viết</Link>
                </div>
            </div>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link collapsed" to="#" data-toggle="collapse">
                <i className="fas fa-fw fa-image"></i>
                <span>Hình ảnh</span>
            </Link>
            <div className="collapse">
                <div className="bg-white py-2 collapse-inner rounded">
                    <Link className="collapse-item" to="/cw-admin/media">Thư viện ảnh</Link>
                    <Link className="collapse-item" to="/cw-admin/media/upload">Thêm ảnh</Link>
                </div>
            </div>
        </li>

        <hr className="sidebar-divider"/>

        <div className="sidebar-heading">
            Cài đặt
        </div>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="#" data-toggle="collapse">
                <i className="fas fa-cogs"></i>
                <span>Cài đặt chung</span>
            </Link>
            <div className="collapse">
                <div className="bg-white py-2 collapse-inner rounded">
                    <Link className="collapse-item" to="login.html">Cài đặt hình ảnh</Link>
                    <Link className="collapse-item" to="register.html">Cài đăng trang</Link>
                    <Link className="collapse-item" to="forgot-password.html">Cài đặt đường dẫn</Link>
                </div>
            </div>
        </li>

        <li className="nav-item">
            <Link className="nav-link collapsed" to="/cw-admin/role/view">
                <i className="fas fa-user-shield"></i>
                <span>Phân quyền</span>
            </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>;
}

export default Sidebar;