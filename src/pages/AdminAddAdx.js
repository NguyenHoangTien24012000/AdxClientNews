import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { addAdxTypeAction } from '../redux/actions/AdxTypeAction';
export default function AdminAddAdx(props) {

    const {typeAdx} = props.match.params;

    const dispatch = useDispatch();
    
    const [file, setFile] = useState({ fileRender: '' });
    
    // console.log(allTypeAdx)
    useEffect(() =>{
     
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            detail:  '',
            image: '',
            name_adx: '',
            name_demo:  '',
            posti:  '',
            size:  '',
            type_adx: typeAdx ? typeAdx :  '',
            type_screen: 'PC'
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
            dispatch(addAdxTypeAction(formData, values.type_adx, props.history))
        },
    });

    const hangdleChangeFile = async (e) => {
        if (e.target.files && e.target.files[0]) {
            let image = e.target.files[0]
            await formik.setFieldValue("image", image)
            setFile({ fileRender: URL.createObjectURL(image) });
        }
    }

    return (
        <div className='container'>
            <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX</h4>
            <div className='row'>
                <div className="form-group col-10">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-6">
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
                                <input type="text" className='form-control' name='type_adx' value={formik.values.type_adx} disabled={true} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Type Screen</label>
                                <select className="form-control" defaultValue="PC" name='type_screen' onChange={formik.handleChange}>
                                    <option value="MOBILE">MOBILE</option>
                                    <option value="PC">PC</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mb-5">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
