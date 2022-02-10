import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getADXGroupTypeAction } from '../redux/actions/AdxTypeAction';
import { ACCESS_TOKEN } from '../util/config';
import ItemAdxType from './ItemAdxType'

export default function TabAdminAdxPC(props) {
 
    const { allTypeAdx } = useSelector(state => state.AdxTypeReducer);

    const dispatch = useDispatch();

    const { adxGroupType } = useSelector(state => state.AdxTypeReducer)

    const renderAdxType = () => {
        return allTypeAdx?.map((item, index) => {
            const nameAdx = item.type_adx.replace(/\s/g, '');
            return <div key={index}>
                <button onClick={() => {
                    dispatch(getADXGroupTypeAction(item.type_adx))
                }} className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target={`#${nameAdx}`}>
                    <div>
                        <span className="bi bi-cart-dash"></span>
                        <NavLink className="ml-2" to={`/admin/${item.type_adx}`}>{item.type_adx}</NavLink>
                    </div>
                    <span className="bi bi-chevron-down small"></span>
                </button>
                <div className="collapse" id={nameAdx} data-parent="#sidebar">
                    <div className="list-group">
                        <ItemAdxType adxGroupType={adxGroupType} />
                    </div>
                </div>
            </div>
        })
    }

    const checkOut = ()=>{
        sessionStorage.removeItem(ACCESS_TOKEN)
    }

    return (
        <div>
            {renderAdxType()}
            <button className="list-group-item list-group-item-action bg-dark text-white border-0 d-flex justify-content-between align-items-center" >
                <div>
                    <span className="bi bi-cart-dash"></span>
                    <NavLink className="ml-2" to={`/admin/adxContact`}>ADX CONTACT</NavLink>
                </div>
                <span className="bi bi-chevron-down small"></span>
            </button>
            <div style={{ marginTop: '40vh' }} className="border-0 d-flex justify-content-center" >
                <div className='d-flex'>
                    <NavLink className="ml-2 mr-3 p-2 border border-white rounded-circle" to={`/login`} onClick={() => {checkOut()}}><svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg></NavLink>
                    <NavLink className="ml-2 p-2 border border-white rounded-circle" to={`/admin/userAdmin`}><svg style={{ width: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg></NavLink>
                </div>
                <span className="bi bi-chevron-down small"></span>
            </div>
        </div>
    )
}
