import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../redux/actions/UserAction';

export default function AdminUser(props) {

    const { thongTinNguoiDung } = useSelector(state => state.UserReducer)

    const history = props.history;
    // console.log(history)

    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({ email: '', password_login: '', new_password:'', confirm_password : '' });
    const [error, setError] = useState({ email: '', password_login: '', new_password:'', confirm_password : '' });

    const dispatch = useDispatch();
    useEffect(() => {
        if (thongTinNguoiDung) {
            setUser({...user, email : thongTinNguoiDung.email, password_login : thongTinNguoiDung.password_login})
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
        if (!value) {
            setError({ ...error, [name]: `${name} invalid!!!` })
        } else {
            setError({ ...error, [name]: '' });
        }
        // console.log('1', user.new_password)
        // console.log('2', user.confirm_password)
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.new_password !== user.confirm_password){
            setError({...error, confirm_password : 'confirm_password mismatched!!'})
            setEdit(true)
            return
        }else{
            setError({ ...error, confirm_password: '' });
        }
        if (!error.email && !error.password_login && !error.new_password && !error.confirm_password) {
            let newuser = {email : user.email, password_login : user.new_password}
            dispatch(changeUserAction(newuser, history))
            setEdit(false)
        }
    }


    return <div className='container'>
        <h4 className='text-primary d-flex justify-content-center m-3'>USER ADMIN</h4>
        <div className='row'>
            <div className="form-group col-10">
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' disabled={!edit} value={user.email} onChange={handleChange} />
                            <div><p className='text-danger'>{error.email}</p></div>
                        </div>
                        <div className="mb-3 col-6" style={{ display: `${!edit ? '' : 'none'}` }} >
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='password_login' disabled={!edit} value={user.password_login} onChange={handleChange} />
                            <div><p className='text-danger'>{error.password_login}</p></div>
                        </div>
                    </div>
                    <div className='row' style={{ display: `${edit ? '' : 'none'}` }}>
                        <div className="mb-3 col-6">
                            <label className="form-label">New Password</label>
                            <input type="password" className="form-control" name='new_password' disabled={!edit} value={user.new_password} onChange={handleChange} />
                            <div><p className='text-danger'>{error.new_password}</p></div>
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Password Confirm</label>
                            <input type="password" className="form-control" name='confirm_password' disabled={!edit} value={user.confirm_password} onChange={handleChange} />
                            <div><p className='text-danger'>{error.confirm_password}</p></div>
                        </div>
                    </div>
                    <button style={{ display: `${edit ? '' : 'none'}` }} type="submit" className="btn btn-primary mb-2">Update</button>
                </form>
                {edit ? '' : <button className="btn btn-primary mb-5" onClick={() => setEdit(true)}>Edit</button>}
            </div>
        </div>
    </div>;
}
