function View() {
    return <div className="text-center">
        <div className="error mx-auto" data-text="404">404</div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">Có vẻ như đang có vấn đề về đường dẫn của bạn...</p>
        <a href="index.html">&larr; Trở về Dashboard</a>
    </div>
}
export default View;