import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getADXGroupTypeAction } from '../redux/actions/AdxTypeAction';

export default function ItemAdxType(props) {
  
   const {adxGroupType} = props

    const renderItemAdx = () => {
        return adxGroupType.map((item, index) => {
            return <NavLink className="list-group-item list-group-item-action border-0 pl-5" key={index} to={`/admin/edit/${item.id_adx}`}>{item.name_adx.toUpperCase()}</NavLink>
        })
    }

    return (
        <>
            {renderItemAdx()}
        </>
    )
}
