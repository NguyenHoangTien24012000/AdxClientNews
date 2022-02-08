import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAdxTypeAction, upLoadAdxTypeAction } from '../redux/actions/AdxTypeAction';
import * as Yup from "yup";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { getAdxDemoAction } from '../redux/actions/AdxDemoAction';

export default function AdminEditAdx(props) {

    

    const dispatch = useDispatch();

    const { adxType } = useSelector(state => state.AdxTypeReducer)

    const { arrayDemoAdx } = useSelector(state => state.AdxDemoReducer)

    // console.log(demoAdx);

    let { idADX } = (props.match.params)


    const [file, setFile] = useState({ fileRender: '' });

    useEffect(() => {
        dispatch(getAdxTypeAction(idADX))
        dispatch(getAdxDemoAction(idADX))
    }, [idADX])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            detail: adxType ? adxType.detail : '',
            id_adx: adxType ? adxType.id_adx : '',
            image: adxType ? adxType.image : '',
            name_adx: adxType ? adxType.name_adx : '',
            name_demo: adxType ? adxType.name_demo : '',
            posti: adxType ? adxType.posti : '',
            size: adxType ? adxType.size : '',
            type_adx: adxType ? adxType.type_adx : '',
            type_screen: adxType ? adxType.type_screen : ''
        },
        validationSchema: Yup.object({
            detail: Yup.string().required("Required!!"),
            name_adx: Yup.string().required("Required!!"),
            name_demo: Yup.string().required("Required!!"),
            posti: Yup.string().required("Required!!"),
            size: Yup.string().required("Required!!"),
        }),
        onSubmit: values => {
            let formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key])
            }
            dispatch(upLoadAdxTypeAction(formData, props.history, values.type_adx))
        },
    });

    const hangdleChangeFile = async (e) => {

        if (e.target.files && e.target.files[0]) {
            let image = e.target.files[0]
            await formik.setFieldValue("image", image)
            setFile({ fileRender: URL.createObjectURL(image) });
        }
    }

    const renderListDemo = () => {
        return arrayDemoAdx?.map((item, index) => {
            return <tr key={index} >
                <th scope="row" >{item.id_demo}</th>
                <td >{item.name_demo}</td>
                <td  style={{width :'20%'}}><img src={item.image} style={{width : "30%"}} alt='Adx Demo' /></td>
                <td className="d-flex align-items-center">
                    <button type="button" className="btn btn-primary mr-1"><NavLink to={`/admin/editAdxDemo/${item.id_demo}`} className="text-white">Edit</NavLink></button>
                </td>
            </tr>
        })
    }

    return (
        <div className='container'>
            <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX</h4>
            <div className='row'>
                <div className="form-group col-10">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-2">
                                <label className="form-label">ID Adx</label>
                                <input type="number" className="form-control" name='id_adx' disabled={true} value={formik.values.id_adx} onChange={formik.handleChange} />
                            </div>
                            <div className="mb-3 col-10">
                                <label className="form-label">Name Adx</label>
                                <input type="text" className="form-control" name='name_adx' value={formik.values.name_adx} onChange={formik.handleChange} />
                                {formik.errors.name_adx && (
                                    <p className='text-danger'>{formik.errors.name_adx}</p>
                                )}
                            </div>

                        </div>
                        <div className='row'>
                            <div className="mb-3 col-4">
                                <label >File Image</label>
                                <input type="file" className="form-control-file" name="image" id="customFile" onChange={hangdleChangeFile} />
                            </div>
                            {!file.fileRender ? <div className="mb-3 col-4">
                                <img src={formik.values.image} className='img-fluid w-50' alt='Adx image' />
                            </div> : <div className="mb-3 col-4">
                                <img src={file.fileRender} className='img-fluid w-50' alt='Adx image' />
                            </div>}
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Name AdxDemo</label>
                                <input type="text" className="form-control" name='name_demo' value={formik.values.name_demo} onChange={formik.handleChange} />
                                {formik.errors.name_demo && (
                                    <p className='text-danger'>{formik.errors.name_demo}</p>
                                )}
                            </div>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Position</label>
                                <input type="text" className="form-control" name='posti' value={formik.values.posti} onChange={formik.handleChange} />
                                {formik.errors.posti && (
                                    <p className='text-danger'>{formik.errors.posti}</p>
                                )}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-12'>
                                <label className="form-label">Detail</label>
                                <textarea type="text" className="form-control" name='detail' value={formik.values.detail} onChange={formik.handleChange} />
                                {formik.errors.detail && (
                                    <p className='text-danger'>{formik.errors.detail}</p>
                                )}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Size</label>
                                <input type="text" className="form-control" name='size' value={formik.values.size} onChange={formik.handleChange} />
                                {formik.errors.size && (
                                    <p className='text-danger'>{formik.errors.size}</p>
                                )}
                            </div>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Type ADX</label>
                                <input type="text" className="form-control" name='position' disabled={true} value={formik.values.type_adx} onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Type Screen</label>
                                <select className="form-control" defaultValue={formik.values.type_screen} name='type_screen' onChange={formik.handleChange}>
                                    <option value="MOBILE">MOBILE</option>
                                    <option value="PC">PC</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mb-5">Update</button>
                    </form>
                </div>
            </div>
            <h5>ADX Demo</h5>

            <div><table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID DEMO</th>
                        <th scope="col">NAME DEMO</th>
                        <th scope='col'>IMAGE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {renderListDemo()}
                </tbody>
            </table></div>
        </div>
    );
}

