import 'normalize.css';
import './style/main.scss';
//import "antd/lib/button/style/index.css";

import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>)
