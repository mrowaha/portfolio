import * as React from "react";
import { useAtom } from "jotai";

import { titleAtom } from "@/store";


function ContactPage() {

  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Contact")
  }, [])

  return (
    <h1>Contact</h1>
  )
}

export default ContactPage;