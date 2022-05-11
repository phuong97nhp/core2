function View() {
    return <>
        <h1 className="h3 mb-1 text-gray-800">Thư viện ảnh</h1>
        <div className="row">

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header py-3">
                    <form>
                        <div className="row">
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Tìm hình" name="search"/>
                            </div>
                            <div className="col-md-3">
                                <input type="month" className="form-control" placeholder="Enter password" name="datatime"/>
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <span className="text">Tìm ảnh</span>    
                                </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="card-body text-center">
                        <div className="row">
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/HappyBox_733_2813-copy.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/hop-qua-tet-da-cao-cap-Happybox-HPH0141-300x300.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/hop-qua-tet-da-cao-cap-Happybox-HPH0141-300x300.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/hop-qua-tet-da-cao-cap-Happybox-HPH0141-300x300.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/hop-qua-tet-da-cao-cap-Happybox-HPH0141-300x300.jpg"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-1">
                                <a href="#">
                                    <div className="media-image">
                                        <img src="https://happybox.vn/wp-content/uploads/2021/12/hop-qua-tet-da-cao-cap-Happybox-HPH0141-300x300.jpg"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default View;