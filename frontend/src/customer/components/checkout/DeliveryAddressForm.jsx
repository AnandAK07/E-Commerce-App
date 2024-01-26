import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { AddressCard } from './AddressCard'

export const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    // form default behaviour refresh the page
    e.preventDefault();
    console.log('address')
    const data=new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    }
    console.log("address",address)

  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className="p-5 py7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained'>Deliver Here</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form action="" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField id='firstName' name='firstName' label='First Name' fullWidth autoComplete='given-name' required />  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id='lastName' name='lastName' label='Last Name' fullWidth autoComplete='given-name' required />
                </Grid>
                <Grid item xs={12}>
                  <TextField id='address' name='address' label='Address' fullWidth autoComplete='given-name' required multiline rows={4}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id='city' name='city' label='city' fullWidth autoComplete='given-name' required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id='state' name='state' label='State/Province/Region' fullWidth autoComplete='given-name' required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id='zip' name='zip' label='Zip / Postal code' fullWidth autoComplete='shipping postal' required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth autoComplete='given-name' required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{py:1.5, mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained' type='submit'>Deliver Here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
