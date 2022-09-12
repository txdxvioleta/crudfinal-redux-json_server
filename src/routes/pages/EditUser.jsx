import { FormControl, FormGroup, Typography, Button, styled, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../../redux/actions';
import Swal from 'sweetalert2';

//Personalización de componentes:
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  //Hook: useState
  const [state, setState] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    salary: '',
  });

  //Recupero el id mediante el uso de params:
  const { id } = useParams();

  //Desestructuro user del state
  const { user } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hook: useEffect()
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  //Verifico si está definido user:
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  //Función que se ejecuta cuando se produce un cambio en los inputs:
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //Función que se ejecuta al presionar el botón de 'add':
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
      //Alertas:
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Update successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(updateUser(state, id));
          setTimeout(() => {
            navigate('/');
          }, 1500);
        }
      });
    }
  };

  return (
    <>
      <Container style={{ marginTop: '1em' }}>
        <Typography align="center" variant="h4">
          Edit user
        </Typography>
        <FormControl>
          <TextField
            required
            autoFocus
            id="outlined-required"
            label="Name"
            variant="filled"
            autoComplete="off"
            value={state.name || ''}
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
            value={state.lastName || ''}
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
            value={state.email || ''}
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
            value={state.phone || ''}
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
            value={state.salary || ''}
            onChange={handleInputChange}
            name="salary"
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Edit user
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
