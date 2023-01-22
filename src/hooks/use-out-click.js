import { useEffect } from "react";

function useOutClickWrite ( ref, handler ) {
  useEffect(() => {
    function clickHandler (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(false);
      }
    }

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler)
    };
  }, [ref, handler]);
};

export default useOutClickWrite;
