import * as React from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MuiThemeProvider} from '@/theme';
import {Layout} from "@/layout";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MuiThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  )
}
