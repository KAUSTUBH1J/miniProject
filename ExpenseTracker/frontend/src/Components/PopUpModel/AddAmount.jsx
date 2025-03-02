import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Category } from '@mui/icons-material';
import * as Yup from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    const  initialValues = {
            title: '',
            amount: '',
            category: ''
        }; 
    const validation =  Yup.object({
        title       : Yup.string().required('Title is required').max(100),
        amount      : Yup.number('Amount is must in number format').required('Amount is required').positive("Amount Must be a positive number").min(1,`Amount must be less than or equal to 1`),
        category    : Yup.number().required('Category is required').max(255)
      });
    const onSubmit = value => {
            console.log('form data', value);
        };

    return (
        <>
            
            <Box>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>    
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>Add Amount</h2>
                    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
                        <Form >
                        <div className='mb-3'>
                            <label htmlFor='title'>Title</label>
                            <Field type='text' name="title" className='form-control' />
                            <ErrorMessage name='title'>
                                {
                                ErrorMessage => <div className='text-danger'> {ErrorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='amount'>Amount</label>
                            <Field type="number" name="amount" className='form-control' />
                            <ErrorMessage name='amount'>
                                {
                                ErrorMessage => <div className='text-danger'> {ErrorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='amount'>Amount</label>
                            <Field as="select" name="category" className="form-select">
                                <option>Select</option>
                                <option value="1">Red</option>
                                <option value="2">Green</option>
                                <option value="3">Blue</option>
                            </Field>
                            <ErrorMessage name='category'>
                                {
                                ErrorMessage => <div className='text-danger'> {ErrorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <button type="submit" className='btn btn-primary'>Add</button>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </>
    );
}
