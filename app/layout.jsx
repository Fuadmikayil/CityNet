import "./globals.css";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
export const metadata = {
  title: "CityNet",
  description: "CityNet",
  icons: {
    icon: "/LogoWebtitle.svg", // Faylın mövcud olduğundan əmin ol
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <SubHeader/>
        {children}</body>
    </html>
  );
}
