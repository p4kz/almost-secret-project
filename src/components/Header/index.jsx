import React from "react";
import Burger from "./Burger";

import {
  HeaderBox,
  HeaderWrap,
} from './styles'

export default function Header () {
  return (
    <>
      <HeaderBox>
        <HeaderWrap>
          <h2><a className="header__logo" href="#">p4k-studio</a></h2>
          <nav>
            <Burger />
          </nav>
        </HeaderWrap>
      </HeaderBox >
    </>
  )
}