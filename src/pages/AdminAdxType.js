import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteAdxTypeAction, getADXGroupTypeAction, getItemTypeAdxAction } from '../redux/actions/AdxTypeAction';


export default function AdminAdxType(props) {
    const dispatch = useDispatch();
    const { adxGroupType } = useSelector(state => state.AdxTypeReducer)

    const { ADXType } = props.match.params;
    
    

    useEffect(() => {
        dispatch(getADXGroupTypeAction(ADXType));
    }, [])

    const renderAdxType = () => {
        return adxGroupType?.map((item, index) => {
            return <tr key={index}>
                <th scope="row">{item.id_adx}</th>
                <td>{item.name_adx}</td>
                <td>{item.size}</td>
                <td style={{ width: '20%' }}><img src={item.image} style={{ width: "30%" }} alt='Adx Demo' /></td>
                <td>{item.type_screen}</td>
                <td>
                    <button type="button" className="btn btn-primary mr-1"><NavLink to={`/admin/edit/${item.id_adx}`} className="text-white">Edit</NavLink></button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target={`#model${item.id_adx}`}>Delete</button>
                    <div className="modal fade" id={`model${item.id_adx}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Do you want to delete?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() =>{
                                        dispatch(deleteAdxTypeAction(item.id_adx, ADXType))
                                    }} >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        })
    }

    return (
        <div className='container'>
            <h3 className='d-flex justify-content-center text-primary mt-2'>{ADXType}</h3>
            <div><table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME ADX</th>
                        <th scope='col'>SIZE</th>
                        <th scope='col'>IMAGE</th>
                        <th scope='col'>TYPE SCREEN</th>
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

