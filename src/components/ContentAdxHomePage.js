import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getADXGroupTypeAction } from '../redux/actions/AdxTypeAction'
import ContentAdxHomePageLeft from './ContentAdxHomePageLeft'
import ContentAdxHomePageRight from './ContentAdxHomePageRight'

export default function ContentAdxHomePage(props) {
    // console.log(props)
    let adxType = props.match.params.typeAdx;
    return (
        <section className="content">
            <ContentAdxHomePageLeft adxType = {adxType} />
            <ContentAdxHomePageRight />
        </section>
    )
}
