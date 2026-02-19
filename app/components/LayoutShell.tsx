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

  const hideNavbar =
    pathname.startsWith("/floorplans/") && pathname !== "/floorplans/";

  return (
    <>
      {!hideNavbar && (
        <header className="z-[1000]">
          <Navbar />
        </header>
      )}

      {/* Add top padding ONLY when navbar is shown */}
      <main
        className={`min-h-screen ${
          !hideNavbar ? "pt-[110px] md:pt-[130px]" : ""
        }`}
      >
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
