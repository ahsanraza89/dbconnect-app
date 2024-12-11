
import Header from "@/components/header/header";
import "./globals.css";
import { ToastContainer } from "react-toastify";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      </head>
      <body >
        <main>
          <Header></Header>
          <ToastContainer></ToastContainer>

        {children}
        </main>
      </body>
    </html>
  );
}
