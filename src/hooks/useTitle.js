import { useEffect } from "react"

export  function useTitle(path) {

    useEffect(() => {
        document.title = path ;
      }, [path])

  return null;
}
