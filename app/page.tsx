import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Link href="/restaurant/bruh">
              <RestaurantCard />
            </Link>
          </div>
        </main>
      </main>
    </main>
  )
}
