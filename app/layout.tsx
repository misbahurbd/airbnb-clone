import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModel from '@/components/modal/RegisterModal'
import { Toaster } from 'react-hot-toast'
import LoginModal from '@/components/modal/LoginModal'
import getCurrentUser from '@/actions/getCurrentUser'
import RentModal from '@/components/modal/RentModal'
import SearchModal from '@/components/modal/SearchModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Complete Airbnb clone with NextJS for practice!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={font.className}>
        <Toaster />
        <RegisterModel />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <main className='pb-20 pt-28'>{children}</main>
      </body>
    </html>
  )
}
