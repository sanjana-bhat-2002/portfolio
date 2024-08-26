import React, { type ReactNode } from 'react'
import { ReactSVG } from 'react-svg';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="text-gray-600 body-font mb-48 lg:mb-24">
      <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row justify-between items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900">
          {children}

        </a>
        <nav className="md:ml-auto rounded-3xl flex flex-wrap p-4 items-center text-base justify-center  ">

          <a href="/A-Sanjana-B-Bhat-Frontend-Web-Developer.pdf" className="font-bold text-lg text-accent flex items-center justify-center lg:mr-16">
            
            <p>Resume</p>
            <svg
              fill="none"
              stroke="#6b7280"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>

          </a>

        </nav>

      </div>

    </header>
  )
}


export default Header