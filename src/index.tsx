import { StrictMode } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import App from './App';
// import ErrorPage from './components/pages/error-page';
// import MainPage from './components/pages/MainPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <ChakraProvider>
//         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//         <App />
//       </ChakraProvider>
//     ),
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'main/:mainId',
//         element: <MainPage />
//       }
//     ]
//   }
// ]);

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <RouterProvider router={router} /> */}
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    {/* </RouterProvider> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
