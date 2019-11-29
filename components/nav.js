import React from "react";
import styled from "styled-components";

const Nav = () => (
  <NavContainer>
    <NavItemsContainer>
      <NavItems>Cogenius Shop</NavItems>
      <NavItems>
        <InputContainer>
          <input type="text" />
          <input type="submit" value="Faire une recherche" />
        </InputContainer>
      </NavItems>
    </NavItemsContainer>
  </NavContainer>
);

export default Nav;

const NavContainer = styled.nav`
  max-width: 1100px;
  margin: auto;
  color: white;
  padding-top: 15px;
`;
const NavItemsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-evenly;
`;
const NavItems = styled.li``;
const InputContainer = styled.form``;
