import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Search from "./Search";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creating Youtube Next Js App",
  description: "Generated by Me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex space-x-5 divide-x-2'>
      <div>
        <h1>Search</h1>
      </div>
      <div className='flex-1 pl-5'>
        <Search/>
        <div>{children}</div>
      </div>
    </main>
  );
}
