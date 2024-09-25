import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp" // not MyApp.jsx because vite manages this to look for standard javascript files
import "./main.css"

const container = document.getElementById("root")

const root = ReactDOMClient.createRoot(container)

// React componennt MyApp to be injected in the root of an HTML page
root.render(<MyApp />)