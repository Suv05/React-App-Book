import { useEffect } from "react";

function UseOnClickOutside(ref, handler) {
  useEffect(() => {
    const listner = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [handler, ref]);
}

export default UseOnClickOutside;
