import React from 'react';
import {useFormik} from 'formik';
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
    
 <div>
    <h1>Form </h1>
    <form id="main" onSubmit={formik.handleSubmit}>
      <div id="txt">
        <label id="lab" HTMLfor="name">Name:</label>
        <input type="text" id="name" name="name" className="inp" onChange={formik.handleChange} value={formik.values.name} />
      </div>
      <div id="txt">
              <label id="lab" HTMLfor="email">E-mail:</label>
      <input type="email" id="email" name="email" className="inp" onChange={formik.handleChange} value={formik.values.email} />
    </div>
 <div id="txt">
          <label id="lab" HTMLfor="age">Age:</label>
      <input type="number" id="age" name="age" className="inp" onChange={formik.handleChange} value={formik.values.age} />
    </div>
 
      <button type="submit">Sumbit</button>
      </form>
    </div>

   )
}   


export default FormComponent;