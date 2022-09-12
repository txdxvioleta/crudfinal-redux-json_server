import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, deleteUser } from '../../redux/actions';
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/style.css';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

// Componente que renderiza la tabla con todos los usuarios:
const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  //Columnas para armar la tabla:
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130, sortable: false, disableColumnMenu: true },
    { field: 'lastName', headerName: 'Last name', width: 150, sortable: false, disableColumnMenu: true },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 140,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 140,
      headerAlign: 'center',
      sortable: true,
      disableColumnMenu: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 210,
      sortable: false,
      headerAlign: 'center',
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="outlined"
              style={{ marginRight: 3 }}
              color="primary"
              component={Link}
              to={`/view/${cellValues.row.id}`}
            >
              View
            </Button>
            <Button variant="outlined" color="error" onClick={(e) => handleDelete(e, cellValues.row.id)}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  //Navigate:
  const navigate = useNavigate();

  //Carga de usuarios:
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  //Borrar usuario:
  const handleDelete = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      icon: 'error',
      allowEscapeKey: false,
      allowEnterKey: false,
      showDenyButton: true,
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'User deleted',
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch(deleteUser(id));
      }
    });
  };

  return (
    <>
      <div id="div-button-add">
        <Button color="primary" variant="outlined" onClick={() => navigate('/add')}>
          ADD USER
        </Button>
      </div>
      <div style={{ maxWidth: '100%', marginTop: '2em' }}>
        <DataGrid
          columns={columns}
          rows={users}
          pageSize={6}
          rowsPerPageOptions={[6]}
          autoHeight
          disableColumnSelector
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default AllUsers;
