"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide navbar on floorplan pages
  const hideNavbar =
    pathname.startsWith("/floorplans/") && pathname !== "/floorplans/";

  return (
    <>
      {!hideNavbar && (
        <header className="z-[1000]">
          <Navbar />
        </header>
      )}

      <main className="min-h-screen">{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
