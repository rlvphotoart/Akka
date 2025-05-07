import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Task Manager - Akkodis',
  description: 'Task management system for Akkodis team members',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-akkodis-gray min-h-screen`}>
        <header className="bg-akkodis-navy text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Team Task Manager</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-akkodis-cyan transition-colors">Home</a></li>
                <li><a href="/tasks" className="hover:text-akkodis-cyan transition-colors">Tasks</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
} 