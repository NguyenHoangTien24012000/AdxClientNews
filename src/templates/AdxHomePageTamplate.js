import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import FooterAdxHomePage from '../components/FooterAdxHomePage'
import HeaderAdxHomePage from '../components/HeaderAdxHomePage'
import { getAllAdxContactAction } from '../redux/actions/AdxContactAction'

export default function AdxHomePageTamplate(props) {

    const {Component, ...resProps} = props

    const dispatch = useDispatch()
    
    const { allAdxContact } = useSelector(state => state.AdxContactReducer)

    useEffect(() =>{
        dispatch(getAllAdxContactAction())
    }, [])

    return ( <Route {...resProps}  render={(propsRoute) => {
        return <>
            <HeaderAdxHomePage adxContact = {allAdxContact} />
                <Component {...propsRoute} />
            <FooterAdxHomePage  adxContact = {allAdxContact} />
        </>
    }} />
    )
}
