import type { NextPage } from 'next'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 overflow-y-auto">
      <Search />
      <Sidebar />
  
  </div>

  )
}

export default Home
