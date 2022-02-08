import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import {  getDemoAction, upDateDemoAction } from '../redux/actions/AdxDemoAction';

export default function AdminEditAdxDemo(props) {

    const dispatch = useDispatch();

    let { idADXDemo } = (props.match.params)

    const [file, setFile] = useState({ fileRender: '' });

    useEffect(() => {
        dispatch(getDemoAction(idADXDemo))        
    }, [])

    const {demo} = useSelector(state => state.AdxDemoReducer)
    // console.log(demo)
    // const {id_demo, image, link_button1, link_button2, name_demo} = demo

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id_demo: demo ? demo.id_demo : '',
            image: demo ? demo.image : '',
            link_button1: demo ? demo.link_button1 : '',
            link_button2: demo ? demo.link_button2 : '',
            name_demo: demo ? demo.name_demo : ''
        },
        validationSchema: Yup.object({
            link_button1: Yup.string().required("Required!!"),
            link_button2: Yup.string().required("Required!!"),
            name_demo: Yup.string().required("Required!!"),
        }),
        onSubmit: values => {
            let formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key])
            }
            dispatch(upDateDemoAction(formData, idADXDemo ,props.history))
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
            <h4 className='text-primary d-flex justify-content-center mt-3'>EDIT ADX DEMO</h4>
            <div className='row'>
                <div className="form-group col-10">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className="mb-3 col-2">
                                <label className="form-label">ID DEMO</label>
                                <input type="number" className="form-control" name='id_demo' disabled={true} value={formik.values.id_demo
                                } onChange={formik.handleChange} />
                            </div>
                            <div className="mb-3 col-10">
                                <label className="form-label">Name Demo</label>
                                <input type="text" className="form-control" name='name_demo' value={formik.values.name_demo} onChange={formik.handleChange} />
                                {/* {formik.errors.name_adx && (
                                    <p className='text-danger'>{formik.errors.name_adx}</p>
                                )} */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mb-3 col-4">
                                <label>File Image</label>
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
                                <label className="form-label">Link button 1</label>
                                <input type="text" className="form-control" name='link_button1' value={formik.values.link_button1} onChange={formik.handleChange} />
                                {/* {formik.errors.name_demo && (
                                    <p className='text-danger'>{formik.errors.name_demo}</p>
                                )} */}
                            </div>
                            <div className='mb-3 col-6'>
                                <label className="form-label">Link button 2</label>
                                <input type="text" className="form-control" name='link_button2' value={formik.values.link_button2} onChange={formik.handleChange} />
                                {/* {formik.errors.posti && (
                                    <p className='text-danger'>{formik.errors.posti}</p>
                                )} */}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

