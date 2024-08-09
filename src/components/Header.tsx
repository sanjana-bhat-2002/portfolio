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
          {/* <ReactSVG src="../icons/logo.svg"> </ReactSVG> */}

        </a>
        <nav className="md:ml-auto rounded-3xl flex flex-wrap p-4 items-center text-base justify-center  ">

          <a className="font-bold text-lg text-accent flex items-center justify-center lg:mr-16">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm-3.741 17.261c.346-.327.932-.647 1.742-.954.366-.725.731-1.523 1.018-2.232-.242-.506-.397-1.039-.464-1.588-.25-2.061 2.083-1.907 1.729.012-.068.368-.23.884-.483 1.536.367.654.849 1.146 1.233 1.472.524-.084 1.271-.17 1.797-.093 1.396.205 1.219 1.744-.021 1.744-.649 0-1.463-.507-1.972-.896-.779.144-1.613.365-2.33.618-.229.44-.536 1.001-.811 1.396-1.143 1.646-2.65.127-1.438-1.015zm1.199.055c-.253.128-.609.348-.801.559-.299.328-.103.586.257.233.178-.172.392-.492.544-.792zm4.44-1.201c.235.158.558.323.911.33.412.008.377-.261-.082-.328-.2-.03-.488-.03-.829-.002zm-2.947-.128c.328-.109 1.036-.274 1.213-.315-.02-.021-.528-.544-.695-.832-.134.335-.509 1.127-.518 1.147zm.314-3.983c-.057.296.029.771.129 1.061.113-.237.255-.806.197-1.085-.056-.279-.262-.299-.326.024z" /></svg> */}
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