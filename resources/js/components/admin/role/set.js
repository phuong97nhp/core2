import React , { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import validator from 'validator';
import { useAlert } from 'react-alert';
import axios from 'axios';

function Set() {
    const alert = useAlert();
    const [roles, setRoles] = useState([]);
    const [curentRoles, setCurentRoles] = useState([]);
    const [permission, setPermission] = useState([]);
    let { id } = useParams();

    const getData = async () => {
        axios.get(url_home+'api/auth/role/set/'+id)
        .then(function (response) {
            if (response.constructor === String) {
                response = JSON.parse(response);
            }

            if(response.data.success == true) {
                setRoles(response.data.data.role);
                setCurentRoles(response.data.data.curent_role);
                setPermission(response.data.data.permission);
                return alert.success(response.data.message);
            }
        })
        .catch(function (error) {
            return alert.info(error.message);
        });
    }

    const onClickOption = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const object = target.getAttribute('object');
        const controller = target.getAttribute('controller');
        const id = target.getAttribute('id');

        axios.post(url_home+'api/auth/role/setting/', {
            role_id : id,
            access : value,
            controller : controller,
            object : object,
        })
        .then(function (response) {
            if (response.constructor === String) {
                response = JSON.parse(response);
            }

            if(response.data.success == true) {
                return alert.success(response.data.message);
            }
        })
        .catch(function (error) {
            return alert.info(error.message);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const LoadingOptionItem = (props) => {
        const content = props.options.map((option, index) =>
            <option value={option} key={index}>{permission[option]}</option>
        );
        
        return (
            <select onChange={onClickOption} className="form-select form-select-sm w-100" object={props.object} controller={props.controller} id={id}>
                {content}
            </select>
        );
    }

    const LoadingRoleItem = (props) => {
        const content = props.items.map((item, index) =>
            <li  key={index}> 
                <form method="POST">
                    <div className="row">
                        <div className="col">
                            <label>{item.name.vn}</label>
                        </div>
                        <div className="col-3">
                            <LoadingOptionItem options={item.access} object={item.object} controller={props.controller}/>
                        </div>
                    </div>
                </form>
            </li>
        );
        
        return (
            <ul className="list-unstyled">
                {content}
            </ul>
        );
    }

    const LoadingRole = (props) => {
        const content = props.roles.map((role, index) =>

            <div key={index} className="col-md-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{role.name.vn}</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-pie p-1">
                            <LoadingRoleItem items={role.function} controller={role.controller} />
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="row">
                {content}
            </div>
        );
    }

    return <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-1 text-gray-800">Cài đặt vai trò</h1>
            <Link to="/cw-admin/role/view" type="button" className="d-none d-sm-inline-block btn btn-sm btn-secondary btn-icon-split" >
                <span className="icon text-white-50">
                    <i className="fas fa-arrow-left"></i>
                </span>
                <span className="text">Trở lại</span>   
            </Link>
        </div>
        <div className="row">

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header py-3">
                        <h2>{curentRoles.name}</h2>
                    </div>
                    
                    <div className="card-body">
                            
                    <LoadingRole roles={roles}/>
                            
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Set;