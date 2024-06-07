import { RefObject, useEffect, useState } from "react";

const useNodeDom = <T extends HTMLElement>(ref: RefObject<T>) => {
  return {
    dom: ref.current
  };
};

export default useNodeDom;
