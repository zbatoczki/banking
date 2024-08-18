import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName:'FirstName', lastName:'LastName', email:'example@email.com'}
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome, "
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions."
            />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks = {1}
            totalCurrentBalance = {420.69}
          />

          </header>

          RECENT TRANSACTIONS
      </div>

      <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50},{currentBalance: 456.75}]}
          />

    </section>
  )
}

export default Home