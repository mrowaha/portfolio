import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { useTheme } from '@mui/material';
import { useAtom } from "jotai";

import { titleAtom } from "@/store";


function ResumePage() {
  const theme = useTheme();
  const [pageTitle, setPageTitle] = useAtom(titleAtom);

  React.useEffect(() => {
    setPageTitle("Resume")
  }, [])
  
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    backgroundColor: theme.palette.background.default,
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    marginBottom : "1rem"
                }}
            >
              <div style={{
                width : "fit-content", 
                backgroundColor : "#fff",
                display: 'flex',
                justifyContent: 'center',
                padding: '4px',
                alignItems: 'center',
                margin : "0 auto",
                borderRadius : "5px"
              }}>
                <div style={{ padding: '0px 2px' }}>
                      <ZoomOutButton  />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomPopover />
                  </div>
                  <div style={{ padding: '0px 2px' }}>
                      <ZoomInButton />
                  </div>
              </div>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer 
                  fileUrl="/mrowaha_resume.pdf" plugins={[zoomPluginInstance]} 
                  theme={theme.palette.mode}
                />
            </div>
        </div>

    </Worker>)
}

export default ResumePage;