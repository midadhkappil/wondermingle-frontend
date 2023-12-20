import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

const PostForm = ({onSubmit}) => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        content: yup.string().required(),
        startDate: yup.string().required(),
        endDate: yup.string().required()
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={async(twit, { setSubmitting }) => {
                setSubmitting(true)
                await onSubmit(twit)
                setSubmitting(false)
              }}
            initialValues={{
               content: ''
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Form.Label>Where are you going</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Where are you going?"
                                name="content"
                                value={values.content}
                                onChange={handleChange}
                                isInvalid={!!errors.content}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.content}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
        


        





    );
}

export default PostForm;