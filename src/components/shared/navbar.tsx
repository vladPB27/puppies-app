import styled from 'styled-components';
import dogLogo from './../../assets/images/dogLogo.png'
import { Link } from 'react-router-dom'
const NavbarContainer = styled.div`
  background-color: #F7F7F7 ;
  color: #000;
  padding: 5px;
  display:flex;
  font-size: 16px;
  justify-content: space-between;

`;

const NavbarLogo = styled.img`
  height: 50px;
  width: 50px;
  margin:0;
`;

const NavbarLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #99A3A4;
    font-weight: bold;
  }
`;

const Label = styled.label`
  font-size: 20px
`;


export default function NavBar() {

  return (
    <>
      <NavbarContainer>
        <div className='flex-container container'>
          <div>
            <NavbarLogo src={dogLogo} alt="Logo" />
          </div>
          <div className='container'>
            <Label>PUPPIES</Label>
          </div>
        </div>
        <div className='flex-container'>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/dogs">Doggies</NavbarLink>
          <NavbarLink to="">Facts</NavbarLink>
          {/* <NavbarLink to="/about">About</NavbarLink> */}
          {/* <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div> */}
        </div>
      </NavbarContainer>
    </>
  )
}