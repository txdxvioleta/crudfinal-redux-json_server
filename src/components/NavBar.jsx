//MUI:
import { AppBar, Toolbar, styled } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const CodeIcon = styled(CodeOutlinedIcon)`
  margin-left: auto;
`;

const NavBar = () => {
  return (
    <AppBar
      sx={{
        position: 'static',
        backgroundColor: '#242421',
      }}
    >
      <Toolbar>
        <NavLink to="/">
          <HomeRoundedIcon />
        </NavLink>
        <CodeIcon />
        <img src="https://vortex-it.com/wp-content/uploads/2022/04/LOGO-VORTEX-PNG@4x-230x35.png" />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
