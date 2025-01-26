'use client';

import { SessionProvider } from 'next-auth/react';  
import localFont from 'next/font/local';
import { Session } from 'next-auth';
import './globals.css';
import SignOutButton from '../components/signout';  

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});


export default function RootLayout({
  children,
  session, 
}: Readonly<{
  children: React.ReactNode;
  session: Session; 
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      
        <SessionProvider session={session}>
          <SignOutButton />  
          {children} 
        </SessionProvider>
      </body>
    </html>
  );
}
