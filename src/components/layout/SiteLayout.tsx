import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({
  children,
}: SiteLayoutProps) {
  return (
    <>
      <Navbar />

      <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {children}
</motion.main>

      <div className="mt-20 border-t border-slate-300">
        <Footer />
      </div>
    </>
  );
}