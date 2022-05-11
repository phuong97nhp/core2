import React , { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { useAlert } from 'react-alert';
import validator from 'validator';
import axios from 'axios';

function View() {
    const alert = useAlert();
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [roles, setRoles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let [page, setPage] = useState(searchParams.get("page")? searchParams.get("page"): 1);

    const LoadingRole = (props) => {
        const content = props.roles.map((role, index) =>
            <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td>{role.key}</td>
                <td>{role.name}</td>
                <td className="text-center">{role.created_at}</td>
                <td className="text-center">{role.updated_at}</td>
                <td className="text-center">{role.created_user}</td>
                <td  className="text-center">
                    <Link to={'/cw-admin/role/set/'+role.id} className="btn btn-warning" type="button">
                        <i className="fas fa-shield-alt"></i>
                    </Link>
                </td>
            </tr>
        );
        return (
            <tbody>
                {content}
            </tbody>
        );
    }

    const getData = async () => {
        axios.get(url_home+'api/auth/role/view?page='+page)
        .then(function (response) {
            if (response.constructor === String) {
                response = JSON.parse(response);
            }
            setRoles(response.data.data);
            return alert.success(response.data.message);
        })
        .catch(function (error) {
            return alert.info(error.message);
        });
    }

    const HanldRole = () => {
        if(validator.isEmpty(key)){
            return alert.info('Cần nhập vào mã phân quyền');
        }
        
        if(validator.isEmpty(name)){
            return alert.info('Cần nhập vào tên phân quyền');
        }
        
        axios.post(url_home+'api/auth/role/add', {
            name : name, 
            key: key,
        }).then(res => {
            if (res.constructor === String) {
                res = JSON.parse(res);
            }

            if(res.data.success == true){
                getData();
                return alert.success(res.data.message);
            }else{
                return alert.error(res.data.message);
            }
        })
        .catch(result => {
            return alert.error('Lỗi truy cập trang');
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-1 text-gray-800">Vai trò</h1>
            <button type="button" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm btn-icon-split"  data-toggle="modal" data-target="#myModalRole">
                <span className="icon text-white-50">
                    <i className="fas fa-plus fa-sm text-white-50"></i> 
                </span>
                <span className="text">Thêm vài trò</span>   
            </button>
        </div>
        <div className="row">

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header py-3">
                    <form>
                        <div className="row">
                            <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="Tìm" name="search"/>
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <span className="text">Tìm</span>    
                                </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Mã phân quyền</th>
                                        <th className="text-center">Tên phân quyền</th>
                                        <th className="text-center">Ngày phân quyền</th>
                                        <th className="text-center">Ngày cập nhật</th>
                                        <th className="text-center">Người tạo</th>
                                        <th className="text-center">Cập nhật</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Mã phân quyền</th>
                                        <th className="text-center">Tên phân quyền</th>
                                        <th className="text-center">Ngày phân quyền</th>
                                        <th className="text-center">Ngày cập nhật</th>
                                        <th className="text-center">Người tạo</th>
                                        <th className="text-center">Cập nhật</th>
                                    </tr>
                                </tfoot>
                                <LoadingRole roles={roles}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="myModalRole">
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Thêm vài trò</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor="usr">Mã phân quyền: <b className="text-danger">(*)</b></label>
                            <input onChange={(e) => setKey(e.target.value)} defaultValue={key} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Tên phân quyền: <b className="text-danger">(*)</b></label>
                            <input onChange={(e) => setName(e.target.value)} defaultValue={name} type="text" className="form-control"/>
                        </div>
                        
                        <div className="text-center">
                            <button onClick={HanldRole} data-dismiss="modal" type="button" className="btn btn-primary">Tạo vai trò</button>
                        </div>
                    </form>
                </div>

                </div>
            </div>
        </div>
    </>
}
export default View;