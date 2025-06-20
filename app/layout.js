import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Providers } from "./redux/Provider";
import SnackbarProviderWrapper from "./components/snackbar/SnackbarProviderWrapper";
import SnackBarCuston from "./components/snackbar/SnackBarCuston";
import '@splidejs/react-splide/css';

const poppins = Roboto({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppRouterCacheProvider>
          <Providers>
            <SnackbarProviderWrapper>
              <SnackBarCuston />
              <Header />
              <main>{children}</main>
              <Footer />
            </SnackbarProviderWrapper>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
