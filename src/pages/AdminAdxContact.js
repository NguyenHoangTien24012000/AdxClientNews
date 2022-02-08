import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAdxContactAction, getAllAdxContactAction } from '../redux/actions/AdxContactAction';
import * as Yup from "yup";
export default function AdminAdxContact() {

    const dispatch = useDispatch()

    const { allAdxContact } = useSelector(state => state.AdxContactReducer)

    const [edit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(getAllAdxContactAction())
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: allAdxContact.email ? allAdxContact.email : '',
            link_facebook: allAdxContact.link_facebook ? allAdxContact.link_facebook : '',
            link_signin: allAdxContact.link_signin ? allAdxContact.link_signin : '',
            link_signup: allAdxContact.link_signup ? allAdxContact.link_signup : '',
            link_skype: allAdxContact.link_skype ? allAdxContact.link_skype : '',
            link_zalo: allAdxContact.link_zalo ? allAdxContact.link_zalo : '',
            number_phone1: allAdxContact.number_phone1 ? allAdxContact.number_phone1 : '',
            number_phone2: allAdxContact.number_phone2 ? allAdxContact.number_phone2 : ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required!!"),
            link_facebook: Yup.string().required("Required!!"),
            link_signin: Yup.string().required("Required!!"),
            link_signup: Yup.string().required("Required!!"),
            link_skype: Yup.string().required("Required!!"),
            link_zalo: Yup.string().required("Required!!"),
            number_phone1: Yup.string().required("Required!!"),
            number_phone2: Yup.string().required("Required!!"),
        }),
        onSubmit: values => {
            let formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key])
            }
            dispatch(editAdxContactAction(formData))
        },
    });

    return <div className='container'>
        <h3 className='d-flex justify-content-center text-primary mt-2'>ADX CONTACT INFORMATION</h3>
        <div className='row'>
            <div className="form-group col-10">
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label className="form-label">Link Signin</label>
                            <input type="text" className="form-control" name='link_signin' value={formik.values.link_signin} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.link_signin && (
                                <p className='text-danger'>{formik.errors.link_signin}</p>
                            )}
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Link Signup</label>
                            <input type="text" className="form-control" name='link_signup' value={formik.values.link_signup} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.link_signup && (
                                <p className='text-danger'>{formik.errors.link_signup}</p>
                            )}
                        </div>

                    </div>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label className="form-label">Number phone 1</label>
                            <input type="text" className="form-control" name='number_phone1' value={formik.values.number_phone1} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.number_phone1 && (
                                <p className='text-danger'>{formik.errors.number_phone1}</p>
                            )}
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Number phone 2</label>
                            <input type="text" className="form-control" name='number_phone2' value={formik.values.number_phone2} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.number_phone2 && (
                                <p className='text-danger'>{formik.errors.number_phone2}</p>
                            )}
                        </div>

                    </div>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={formik.values.email} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.email && (
                                <p className='text-danger'>{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Facebook</label>
                            <input type="text" className="form-control" name='link_facebook' value={formik.values.link_facebook} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.link_facebook && (
                                <p className='text-danger'>{formik.errors.link_facebook}</p>
                            )}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="mb-3 col-6">
                            <label className="form-label">Skype</label>
                            <input type="text" className="form-control" name='link_skype' value={formik.values.link_skype} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.link_skype && (
                                <p className='text-danger'>{formik.errors.link_skype}</p>
                            )}
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Zalo</label>
                            <input type="text" className="form-control" name='link_zalo' value={formik.values.link_zalo} onChange={formik.handleChange} disabled={!edit} />
                            {formik.errors.link_zalo && (
                                <p className='text-danger'>{formik.errors.link_zalo}</p>
                            )}
                        </div>
                    </div>
                   <button style={{display : `${edit ? '' : 'none'}`}} onClick={()=> setEdit(false)} type="submit" className="btn btn-primary mb-2">Update</button>
                </form>
                {edit ? '' :<button  className="btn btn-primary mb-5" onClick={() => setEdit(true)}>Edit</button>}
            </div>
        </div>
    </div>;
}
