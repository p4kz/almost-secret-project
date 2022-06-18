import React from "react";
import Burger from "./Burger";

import {
  HeaderBox,
  HeaderWrap,
  HeaderLogo,
  HeaderNav,
} from './styles'

export default function Header () {
  return (
    <>
      <HeaderBox>
        <HeaderWrap>
          <HeaderLogo>p4k-studio</HeaderLogo>
          <HeaderNav>
            <Burger />
          </HeaderNav>
        </HeaderWrap>
      </HeaderBox >
    </>
  )
}