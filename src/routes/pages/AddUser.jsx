import React, { useState } from 'react';
import { addUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

//MUI:
import { FormControl, FormGroup, Typography, Button, styled, TextField } from '@mui/material';

//Personalización de componentes:

const Container = styled(FormGroup)`
  width: 50%;
  margin: 2% auto 0 auto;
  & > div {
    margin-top: 15px;
  }
`;

//Estado inicial:
const initialValue = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  salary: ''
};

const AddUser = () => {
  //Hook: useState
  const [state, setState] = useState(initialValue);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Función que se ejecuta cuando se produce un cambio en los inputs:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!state.name, !state.lastName, !state.email || !state.phone || !state.salary)) {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required',
        showConfirmButton: false,
        timer: 2400,
      });
    } else {
      dispatch(addUser(state));

      Swal.fire({
        icon: 'success',
        title: 'Added successfully',
        showConfirmButton: false,
        timer: 2400,
      });
      setTimeout(() => {
        navigate('/');
      }, 2400);
    }
  };

  return (
    <Container>
      <Typography align="center" variant="h4">
        Add user
      </Typography>

      <FormControl>
        <TextField
          required
          autoFocus
          id="outlined-required"
          label="Name"
          variant="filled"
          autoComplete="off"
          onChange={handleInputChange}
          name="name"
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Last name"
          variant="filled"
          autoComplete="off"
          onChange={handleInputChange}
          name="lastName"
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="filled"
          autoComplete="off"
          onChange={handleInputChange}
          name="email"
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Phone number"
          variant="filled"
          autoComplete="off"
          onChange={handleInputChange}
          name="phone"
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Salary"
          variant="filled"
          autoComplete="off"
          onChange={handleInputChange}
          name="salary"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={(e) => handleSubmit(e)}>
          Add
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
