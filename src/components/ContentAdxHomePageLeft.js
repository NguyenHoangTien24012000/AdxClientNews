import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAdxDemoAction } from '../redux/actions/AdxDemoAction';
import { getADXGroupTypeAction, getAdxTypeAction } from '../redux/actions/AdxTypeAction';

export default function ContentAdxHomePageLeft(props) {
    const { adxGroupType,adxActive } = useSelector(state => state.AdxTypeReducer)
    // console.log(adxGroupType)
    const dispatch = useDispatch()
    useEffect(() => {
        if (props.adxType) {
            dispatch(getADXGroupTypeAction(props.adxType));
        }
    }, [props])
    
    const renderContent = () => {
        return adxGroupType?.map((item, index) => {
            let active =  item.id_adx === adxActive.id_adx ? 'active1' : ''
            let imageMobile = item.type_screen === "MOBILE" ? 'content-img-mobile' : ''
            return <div className={`content-item space-item hover-card-1 ${active}`} key={index} onClick={()=>{
                // console.log()
                dispatch(getAdxTypeAction(item.id_adx))
                dispatch(getAdxDemoAction(item.id_adx))
            }}>
                <div className={`content-img ${imageMobile}`}>
                    <img className="img-product" src={item.image} alt={item.image} />
                    <div className="icon-check">
                        <img src={require('../assets/images/check_circle.png')} alt="icon-check" />
                    </div>
                </div>
                <div className="content-description">
                    <h4>{item.name_adx}</h4>
                </div>
            </div>
        })
    }

    return (
        <div className="content-left">
            <div className="content-common">
                {renderContent()}
            </div>
        </div>
    )
}
