import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorieNav from "./components/CategorieNav";
import Nav from "./components/Nav";
import { ReactNode } from "react";

export const metadata = {
  title: "Votre Application",
  description: "Description de votre application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>

        <div className="flex flex-row">
          <aside className="flex flex-col items-center justify-center left-0 w-[200px] h-full mt-20 mb-4">
            <CategorieNav />
          </aside>

          <main className="flex-grow">
            <Nav />
            <div className="flex flex-col w-full max-h-full items-center justify-center mt-10">
              {children}
            </div>
          </main>
        </div>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
