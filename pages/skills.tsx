import * as React from "react";
import { useAtom } from "jotai";

import { titleAtom } from "@/store";

function SkillsPage() {
  
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Skills")
  }, [])
  
  return (
    <h1>
      Skills
    </h1>
  )
}

export default SkillsPage;