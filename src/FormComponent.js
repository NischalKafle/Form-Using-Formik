import React from 'react';
import {useFormik} from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,Button
} from '@chakra-ui/react'
function FormComponent() {
    const formik = useFormik ({
        initialValues:{
        name: 'Raj',
        email: '',
        age:0 ,
      },
      onSubmit:values=>{
console.log('Submitted Values:',values)
      }
    }
    )
    return (
      <div className="main-1">
        <div className='main-2'>
          <FormControl onSubmit={formik.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <FormLabel className="marg-bot">Name</FormLabel>
            <Input style={{width:'300px',padding:'5px',}} type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div style={{ marginBottom: '10px' }}>
            <FormLabel className="marg-bot">Email address</FormLabel>
            <Input style={{width:'300px',padding:'5px',}} type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
            </div>
          <div style={{ marginBottom: '10px' }}>
            <FormLabel className="marg-bot">Age</FormLabel>
            <Input style={{width:'300px',padding:'5px',}} type='number' name='age' onChange={formik.handleChange} value={formik.values.age} />
            </div>
            <Button mt={4} colorScheme='teal' type='submit'>
            Submit
          </Button>
          </FormControl>
        
        </div>
      </div>
    );
           

}   


export default FormComponent;