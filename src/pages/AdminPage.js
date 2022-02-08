import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllTypeAdxAction } from '../redux/actions/AdxTypeAction';
import { checkTokenAction } from '../redux/actions/UserAction';

export default function AdminPage(props) {
    // console.log(props)
    const dispatch = useDispatch();

    const { allTypeAdx } = useSelector(state => state.AdxTypeReducer);
    
    useEffect(() => {
        // dispatch(checkTokenAction(props.history))
        dispatch(getAllTypeAdxAction());
    }, [])

    const renderAdxType = () => {
        return allTypeAdx?.map((item, index) => {
            // const nameAdx = item.type_adx.replace(/\s/g, '');
            return <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.type_adx}</td>
                <td>{item.number}</td>
                <td>
                    <button type="button" className="btn btn-primary mr-1"><NavLink to={`/admin/${item.type_adx}`} className="text-white">Detail</NavLink></button>
                    <button type="button" className="btn btn-success"><NavLink to={`/admin/addAdx/${item.type_adx}`} className="text-white">Add Item</NavLink></button>
                </td>
            </tr>
        })
    }

    return (
        <div className='container'>
            <h3 className='d-flex justify-content-center text-primary mt-2'>ADX TYPE</h3>
            <div><table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">NAME</th>
                        <th scope="col">NUMBER OF CHILD ELEMENTS</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {renderAdxType()}
                </tbody>
            </table></div>
            
        </div>
    )
}
