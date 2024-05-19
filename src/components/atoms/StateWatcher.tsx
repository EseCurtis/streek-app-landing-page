"use client";

import React, { Fragment, useEffect, useState } from "react";
import { GlobalStoreReducer } from "@/store/Global";
import cmm from "cmm-util";

interface IStateWatcher {}

const StateWatcher: React.FC<IStateWatcher> = () => {
  const { setNavActive } = GlobalStoreReducer();
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > cmm(60/16).px) {
        // Replace 100 with the desired scroll distance
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavActive(isNavActive);
  }, [isNavActive, setNavActive]);

  return <Fragment />;
};

export default StateWatcher;
