import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstname:'Zoltan'}
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome, "
              user={loggedIn?.firstname || 'Guest'}
              subtext="Access and manage your account and transactions."
            />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks = {1}
            totalCurrentBalance = {420.69}
          />

          </header>
      </div>
    </section>
  )
}

export default Home