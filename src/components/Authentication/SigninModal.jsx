import { Password } from '@mui/icons-material'
import { Button, Grid, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema=Yup.object().shape({
    email:Yup.string().email("invalid email").required("email is required"),
    password:Yup.string().required("password is required")
})



const SigninModal = () => {




    const formik=useFormik({
            initialValues:{
                email:"",
                Password:"",
            },
            validationSchema,
            onSubmit:(values)=>{
                console.log("form values",values);
            }


    })


  return (
    <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        size="large"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email) }
                        helperText={formik.touched.email && formik.errors.email}
                    />

                </Grid>




                {/* password formik */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        variant="outlined"
                        size="large"
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password) }
                        helperText={formik.touched.password&& formik.errors.password}
                    />

                </Grid>

                <Grid className="mt-20" item xs={12}>
                    <Button fullWidth variant='contained' type='submit' size='large'
                        sx={{borderRadius:"29px",py:"15px",bgcolor:blue[500]}}
                    >Submit </Button>
                    
                </Grid> 
            </Grid>

    </form>
  )
}

export default SigninModal
