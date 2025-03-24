import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
  background: ${props => props.theme.bgLight};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${props => props.theme.black};
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${props => props.theme.gray};
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Turn Your Spare Time Into Income
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover vetted online earning opportunities and start making money from home today.
          Join thousands of successful members who trust GigWorlds for reliable income streams.
        </Subtitle>
        <CTAButton
          href="#platforms"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Start Earning Now
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 