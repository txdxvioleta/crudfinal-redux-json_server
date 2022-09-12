//MUI:
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@mui/material';

//Redux:
import { getSingleUser } from '../../redux/actions';

//Hooks y params:
import { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Component:
const ViewUser = () => {
  //Desestructuro para obtener el id
  const { id } = useParams();

  const dispatch = useDispatch();

  //Desestructuro user del state
  const { user } = useSelector((state) => state.data);

  //Hook: useEffect()
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: '#ecececc4',
        
        maxWidth: 400,
        maxHeight: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1em',
        padding: 3,
      }}
    >
      <CardActionArea
        sx={{
          backgroundColor: 'rgba(99, 96, 96, 0.055)',
        }}
      >
        <CardMedia
          component="img"
          style={{height: 200, width:200, margin: 'auto'}}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
        />
        <CardContent>
          <Typography style={{ textAlign: 'center' }}>ID: {user.id} </Typography>
          <Typography style={{ textAlign: 'center' }}>Name: {user.name} </Typography>
          <Typography style={{ textAlign: 'center' }}>Last name: {user.lastName}</Typography>
          <Typography style={{ textAlign: 'center' }}>Email: {user.email} </Typography>
          <Typography style={{ textAlign: 'center' }}>Phone: {user.phone} </Typography>
          <Typography style={{ textAlign: 'center' }}>Salary: ${user.salary} </Typography>
          <Typography style={{ textAlign: 'center' }}>Job ID: {user.jobId} </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button fullWidth variant="outlined" size="small" component={Link} to={`/edit/${id}`}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ViewUser;

//Card básica:
/* 
<Card sx={{ maxWidth: 450, margin: 'auto', marginTop: 5 }}>
  <CardContent className="card-content">
    <Typography style={{ textAlign: 'center' }}>ID: {user.id} </Typography>
    <Typography style={{ textAlign: 'center' }}>Name: {user.name} </Typography>
    <Typography style={{ textAlign: 'center' }}>Last name: {user.lastName}</Typography>
    <Typography style={{ textAlign: 'center' }}>Email: {user.email} </Typography>
    <Typography style={{ textAlign: 'center' }}>Phone: {user.phone} </Typography>
  </CardContent>

  <CardActions>
    <Button fullWidth variant="outlined" size="small">
      READ MORE...
    </Button>
  </CardActions>
</Card> */
