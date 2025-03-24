import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: ${props => props.theme.bgLight};
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.black};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: ${props => props.theme.gray};
    margin-bottom: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.black};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${props => props.theme.gray};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.gray};
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.gray};
  color: ${props => props.theme.gray};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo to="/">
            GIG<span role="img" aria-label="globe">🌍</span>RLDS
          </Logo>
          <p>Transform your spare time into income with vetted online earning opportunities since 2017.</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Google Plus"><i className="fab fa-google-plus-g"></i></a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/privacy">Privacy</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Platforms</h3>
          <FooterLink to="/platforms/ysense">ySense</FooterLink>
          <FooterLink to="/platforms/timebucks">TimeBucks</FooterLink>
          <FooterLink to="/platforms/superpay">SuperPay</FooterLink>
          <FooterLink to="/platforms/lootup">LootUp</FooterLink>
          <FooterLink to="/platforms/rewards1">Rewards1</FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; 2025 GigWorlds. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 