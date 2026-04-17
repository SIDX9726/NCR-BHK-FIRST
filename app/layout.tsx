import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner"; // Import the toast container
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NCRBHK | Data-Driven Property Scoring",
  description: "We’re doing the background checks so you don't have to hire a private investigator. Finding a BHK in NCR just got smarter.",
  keywords: ["NCR Real Estate", "BHK Noida", "BHK Gurugram", "Property Scoring", "Delhi Real Estate"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Changed bg-white to bg-[#0a0a0a] to match your premium dark theme */}
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>
        {children}
        
        {/* This makes your witty "Pricing" and "Markets" notifications visible */}
        <Toaster 
          theme="dark" 
          position="bottom-right" 
          toastOptions={{
            style: { 
              background: '#111', 
              border: '1px solid #2563eb',
              color: '#fff' 
            },
          }}
        />
      </body>
    </html>
  );
}