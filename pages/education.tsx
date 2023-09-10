import * as React from "react";
import { useAtom } from "jotai";

import { titleAtom } from "@/store";

function EducationPage() {
  
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Education")
  }, [])
  
  return (
    <h1>Hello</h1>
  )
}

export default EducationPage;