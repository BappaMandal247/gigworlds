import React from 'react';
import styled from '@emotion/styled';
import Hero from '../components/common/Hero';
import PlatformCard from '../components/platforms/PlatformCard';

const PlatformsSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.bgLight};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.black};
  margin-bottom: 3rem;
`;

const PlatformsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const platforms = [
  {
    id: 1,
    name: 'ySense',
    logo: '/assets/platforms/ysense-logo.png',
    description: 'Complete surveys, watch videos, and earn cash with one of the most reliable GPT platforms.',
    features: [
      'Instant payments',
      'Multiple earning methods',
      'Global availability',
      'High-paying surveys'
    ],
    earnings: '$5-15 per hour',
    path: '/platforms/ysense'
  },
  {
    id: 2,
    name: 'TimeBucks',
    logo: '/assets/platforms/timebucks-logo.png',
    description: 'Earn money by completing various tasks, watching videos, and participating in surveys.',
    features: [
      'Daily tasks',
      'Video watching',
      'Social media tasks',
      'Referral program'
    ],
    earnings: '$3-10 per hour',
    path: '/platforms/timebucks'
  },
  {
    id: 3,
    name: 'SuperPay',
    logo: '/assets/platforms/superpay-logo.png',
    description: 'A high-paying platform offering various ways to earn money online.',
    features: [
      'High-paying surveys',
      'Cashback offers',
      'Daily rewards',
      'Multiple payment options'
    ],
    earnings: '$4-12 per hour',
    path: '/platforms/superpay'
  },
  {
    id: 4,
    name: 'LootUp',
    logo: '/assets/platforms/lootup-logo.png',
    description: 'Earn rewards by completing surveys, watching videos, and playing games.',
    features: [
      'Instant rewards',
      'Gaming rewards',
      'Daily bonuses',
      'Multiple payment methods'
    ],
    earnings: '$3-8 per hour',
    path: '/platforms/lootup'
  },
  {
    id: 5,
    name: 'Rewards1',
    logo: '/assets/platforms/rewards1-logo.png',
    description: 'A comprehensive rewards platform offering various earning opportunities.',
    features: [
      'Survey rewards',
      'Video earnings',
      'Daily tasks',
      'Referral bonuses'
    ],
    earnings: '$4-10 per hour',
    path: '/platforms/rewards1'
  }
];

const Home = () => {
  return (
    <main>
      <Hero />
      <PlatformsSection id="platforms">
        <SectionTitle>Popular Earning Platforms</SectionTitle>
        <PlatformsGrid>
          {platforms.map(platform => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </PlatformsGrid>
      </PlatformsSection>
    </main>
  );
};

export default Home; 