import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../redux/actions/UserAction';

export default function AdminUser(props) {

    const { thongTinNguoiDung } = useSelector(state => state.UserReducer)

    const history = props.history;
    // console.log(history)

    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({ email: '', password_login: '' });
    const [error, setError] = useState({ email: '', password_login: '' });

    const dispatch = useDispatch();
    useEffect(() => {
        if (thongTinNguoiDung) {
            setUser(thongTinNguoiDung)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (!value) {
            setError({ ...error, [name]: `${name} invalid!!!` })
        } else {
            setError({ ...error, [name]: '' });
        }
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error.email && !error.password_login) {
            dispatch(changeUserAction(user, history))
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
                        <div className="mb-3 col-6">
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" name='password_login' disabled={!edit} value={user.password_login} onChange={handleChange} />
                            <div><p className='text-danger'>{error.password_login}</p></div>
                        </div>
                    </div>
                    <button style={{ display: `${edit ? '' : 'none'}` }} onClick={() => setEdit(false)} type="submit" className="btn btn-primary mb-2">Update</button>
                </form>
                {edit ? '' : <button className="btn btn-primary mb-5" onClick={() => setEdit(true)}>Edit</button>}
            </div>
        </div>
    </div>;
}
