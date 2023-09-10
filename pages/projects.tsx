import * as React from "react";
import { useAtom } from "jotai";

import { titleAtom } from "@/store";

function ProjectsPage() {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Projects")
  }, [])

  return (
    <h1>
      Projects
    </h1>
  )
}

export default ProjectsPage;