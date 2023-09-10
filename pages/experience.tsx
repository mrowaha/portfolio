import * as React from "react";
import { useAtom } from "jotai";

import { titleAtom } from "@/store";

function ExperiencePage () {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Experience")
  }, [])
  

  return (
    <h1>
      Experience
    </h1>
  )
}

export default ExperiencePage;