import React from "react";

import { useState } from "react";
import Nav from "../Nav";
import { Burger } from "./styles";

export default function burger () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>

      <Nav open={!open} />
    </>
  )
}