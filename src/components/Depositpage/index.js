// src/DepositPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../Depositpage/color.jpg';

const Container = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #2b2b2b;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Balance = styled.div`
  font-size: 18px;
  color: #fdd835;
`;

const PaymentMethod = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const MethodButton = styled.button`
  background-color: ${props => (props.active ? '#fdd835' : '#cfcfcf')};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const AmountSection = styled.div`
  margin-bottom: 20px;
`;

const AmountButton = styled.button`
  background-color: #444;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  width: 120px;
  margin: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${props => props.active && `
    background-color: #fdd835;
    color: #000;
  `}
`;

const AmountInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  margin: 5px;
  border-bottom: 1px solid #666;
  width: calc(100% - 42px);
`;

const Note = styled.div`
  font-size: 12px;
  color: #fdd835;
  margin-bottom: 20px;
  font-weight: 600;
`;

const DepositButton = styled.button`
  background-color: #fdd835;
  border: none;
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2b2b2b;
  border-bottom: 2px solid #444;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #fdd835;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: #fdd835;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

function DepositPage() {
  const [selectedMethod, setSelectedMethod] = useState('WALLET');
  //const [selectedAmount, setSelectedAmount] = useState(300);
  //const [customAmount, setCustomAmount] = useState('');
  const userName = 'John Doe'; // Replace with the actual user name from your authentication logic

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
  };

  return (
    <div>
      <NavBar>
        <Logo>Swastik Win</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Deposit</NavLink>
          <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
        </NavLinks>
      </NavBar>

      <Container>
        <Header>
          <div>Welcome, {userName}</div>
          <Balance>Balance: ₹<span>375084</span></Balance>
        </Header>

        <PaymentMethod>
          <MethodButton active={selectedMethod === 'WALLET'} onClick={() => setSelectedMethod('WALLET')}>WALLET</MethodButton>
          <MethodButton active={selectedMethod === 'DEPOSIT'} onClick={() => setSelectedMethod('DEPOSIT')}>DEPOSIT</MethodButton>
        </PaymentMethod>

        {/*<AmountInput
          type="text"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          onFocus={() => setSelectedAmount(null)}
        />

        <AmountSection>
          {[300, 500, 1000, 5000, 10000, 50000].map(amount => (
            <AmountButton
              key={amount}
              active={selectedAmount === amount}
              onClick={() => setSelectedAmount(amount)}
            >
              {amount}
            </AmountButton>
          ))}
        </AmountSection>*/}
        <StyledImage src={logo} alt="Logo" />

        <Note>
          * The Bank payment gateway offers an additional 5% bonus on First deposit.<br />
          If you transfer the wrong amount as instructed, the funds will be lost, and our company will not be held responsible!<br />
          * Note: You must deposit the exact amount as instructed in the order. The system will automatically update the bonus funds.
        </Note>

        <DepositButton>Play Now</DepositButton>
      </Container>
    </div>
  );
}

export default DepositPage;
