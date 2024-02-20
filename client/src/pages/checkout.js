// Checkout.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutFormSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
});

const Checkout = ({ handleSubmit }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <Formik
                initialValues={{ fullName: '', address: '', city: '', postalCode: '', country: '' }}
                validationSchema={CheckoutFormSchema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-4">
                        <div>
                            <label>Full Name</label>
                            <Field name="fullName" className="input-field" />
                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                            <label>Address</label>
                            <Field name="address" className="input-field" />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                            <label>City</label>
                            <Field name="city" className="input-field" />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                            <label>Postal Code</label>
                            <Field name="postalCode" className="input-field" />
                            <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                            <label>Country</label>
                            <Field name="country" className="input-field" />
                            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                        </div>
                        <button type="submit" className="btn-primary">Complete Order</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;
