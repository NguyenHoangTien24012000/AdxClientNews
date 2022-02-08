import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export default function ContentAdxHomePageRight(props) {
    const domCarousel = useRef(null)
    const domNext = useRef(null)
    const domPrev = useRef(null)
    const domSlider = useRef(null)
    const { arrayDemoAdx } = useSelector(state => state.AdxDemoReducer)
    const { adxActive } = useSelector(state => state.AdxTypeReducer)
    // console.log(adxActive.type_screen)
    function carousel() {
        let current = 0;
        //so luong the con
        const countItem = domCarousel.current.querySelectorAll('.slider-item').length;



        domPrev.current.style.opacity = 0.5;


        domNext.current.addEventListener('click', function () {
            domPrev.current.style.opacity = 1;
            if (current < countItem - 1) {
                current += 1;
                domNext.current.style.opacity = 1;
            }
            if (current === countItem - 1) {

                domNext.current.style.opacity = 0.5;
            }
            domSlider.current.style.transform = `translateX(-${100 / 3 * current}%)`;
        });



        domPrev.current.addEventListener('click', function () {
            domNext.current.style.opacity = 1;
            if (current > 0) {
                current -= 1;
                domPrev.current.style.opacity = 1;
            }
            if (current === 0) {
                domPrev.current.style.opacity = 0.5;
            }
            domSlider.current.style.transform = `translateX(-${100 / 3 * current}%)`;
        });


    }
    useEffect(() => {
        carousel();
        return () => {
            domSlider.current.style.transform = 'translateX(0)';
            domPrev.current.style.opacity = 0.5;
            domNext.current.style.opacity = 1;
        }
    }, [arrayDemoAdx]);

    const renderCarousel = () => {
        let typeScreen = adxActive.type_screen == "PC" ? 'screenPC' : "screenMB"
        return arrayDemoAdx?.map((item, index) => {

            return <div className="slider-item space-right" key={index}>
                <div className={`selection-demo ${typeScreen}`}>

                    <img className='img-carousel' style={{width :'100%', height: '100%',objectFit: 'cover'}} src={item.image} alt={item.name_demo} />

                </div>
                <div className="content-brand">
                    <div className="brand-top">
                        <div className="brand-top-left">
                            <h4>{item.name_demo}</h4>
                            <p>{adxActive.name_demo}</p>
                        </div>
                        <div className="brand-top-right">
                            <button className="button-yellow space-right">
                                <a className="button-text" href={item.link_button1} target="_blank">TẠO QUẢNG CÁO NGAY</a><svg width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.26756 2.4762H2.39279C2.0234 2.4762 1.66914 2.62281 1.40794 2.88378C1.14674 3.14475 1 3.4987 1 3.86777V13.6088C1 13.9779 1.14674 14.3318 1.40794 14.5928C1.66914 14.8538 2.0234 15.0004 2.39279 15.0004H12.1423C12.5117 15.0004 12.866 14.8538 13.1272 14.5928C13.3884 14.3318 13.5351 13.9779 13.5351 13.6088V8.73828"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M12.4895 1.43194C12.7665 1.15514 13.1423 0.999634 13.5341 0.999634C13.9259 0.999634 14.3016 1.15514 14.5787 1.43194C14.8557 1.70874 15.0113 2.08417 15.0113 2.47562C15.0113 2.86708 14.8557 3.2425 14.5787 3.5193L7.96289 10.1293L5.17731 10.8251L5.8737 8.04192L12.4895 1.43194Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="button-yellow ">
                                <a className="button-text" href={item.link_button2} target="_blank">LINK DEMO</a><svg width="19" height="18"
                                    viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.2613 14.25H3.76129V3.75H9.01129V2.25H3.76129C2.92879 2.25 2.26129 2.925 2.26129 3.75V14.25C2.26129 15.075 2.92879 15.75 3.76129 15.75H14.2613C15.0863 15.75 15.7613 15.075 15.7613 14.25V9H14.2613V14.25ZM10.5113 2.25V3.75H13.2038L5.83129 11.1225L6.88879 12.18L14.2613 4.8075V7.5H15.7613V2.25H10.5113Z"
                                        fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="brand-bottom">
                        <div className="brand-bottom-left">
                            <p>Safezone : <span>{adxActive.size}</span></p>
                            <p>Vị trí : <span>{adxActive.posti}</span></p>
                        </div>
                        <div className="brand-bottom-right">
                            <p>{adxActive.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="content-right">
            <div className="content-carousel" ref={domCarousel}>
                <div className="controls">
                    <div className="control-item arrow-left" ref={domPrev}>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.93659 14.2089C8.33753 15.0479 7.13189 15.1563 6.39287 14.4375L1.55452 9.73179C0.442175 8.64993 0.442182 6.65599 1.55452 5.57414L6.39287 0.868421C7.13189 0.149657 8.33753 0.257986 8.93659 1.09698C9.41986 1.77381 9.33645 2.70213 8.74026 3.28197L5.72021 6.21924C4.91278 7.00453 4.91278 8.30139 5.72022 9.08669L8.74026 12.024C9.33645 12.6038 9.41986 13.5321 8.93659 14.2089Z"
                                fill="#FFBD47" />
                        </svg>
                    </div>
                    <div className="control-item arrow-right" ref={domNext}>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M1.06341 0.791052C1.66247 -0.0479409 2.86811 -0.156269 3.60713 0.562496L8.44548 5.26821C9.55783 6.35007 9.55782 8.34401 8.44548 9.42586L3.60713 14.1316C2.86811 14.8503 1.66247 14.742 1.06341 13.903C0.580143 13.2262 0.663553 12.2979 1.25974 11.718L4.27979 8.78076C5.08722 7.99547 5.08722 6.69861 4.27979 5.91331L1.25974 2.97605C0.663551 2.3962 0.580139 1.46789 1.06341 0.791052Z"
                                fill="#FFBD47" />
                        </svg>
                    </div>
                </div>
                <div className="content-slider" ref={domSlider}>
                    {renderCarousel()}
                </div>

            </div>
        </div>
    )
}
