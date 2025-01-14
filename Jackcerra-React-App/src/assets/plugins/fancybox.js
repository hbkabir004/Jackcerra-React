import React, { useEffect } from "react";

import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";

function Fancybox(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    console.log('rerunning!');

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, props.options]);

  return <>{props.children}</>;
}

export default Fancybox;
