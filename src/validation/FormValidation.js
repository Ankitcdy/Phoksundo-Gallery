import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
    return (
        <Formik initialValues={{ firstName: '', lastName: '', password: '', cpassword: '' }} validationSchema={Yup.object({
            firstName: Yup.string()
                .max(20, 'Must be 20 character or less')
                .required('Firstname is required'),

            lastName: Yup.string()
                .max(20, 'Must be 20 character or less')
                .required('Lastname is required'),

            email: Yup.string()
                .email('Invalid email format please try another')
                .required('Email is required'),

            password: Yup.string()
                .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*?!])[A-Za-z\d@#$%^&*?!{8,50}]$/, 'must contain 8 character,one uppercase, one lowercase, one digit and one special character')
                .required('this is required feild'),


            cpassword: Yup.string()
                .required('Required feild')
                .oneOf([Yup.ref('password'), null], 'password and confirm password must match')

        })}>

            <div className="com-md-6 offset md-3 p-3 mt-4 shadow-lg">
                <Form>
                    <div className='mb-3'>
                        <label htmlFor='firstName'>First Name</label>
                        <Field type="text" name="firstName" className="form-control" id="firstName" />
                        <ErrorMessage name="firstName">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>


                    <div className='mb-3'>
                        <label htmlFor='lastName'>Last Name</label>
                        <Field type="text" name="lastName" className="form-control" id="lastName" />
                        <ErrorMessage name="lastName">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>


                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <Field type="password" name="password" className="form-control" id="password" />
                        <ErrorMessage name="password">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>




                    <div className='mb-3'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type="password" name="cpassword" className="form-control" id="cpassword" />
                        <ErrorMessage name="cpassword">
                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage>
                    </div>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </Form>

            </div>

        </Formik>
    )
}

export default FormValidation