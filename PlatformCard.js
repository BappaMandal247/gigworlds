import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  background: ${props => props.theme.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PlatformLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.bgLight};
  border-radius: 12px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const PlatformName = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.black};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${props => props.theme.gray};
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  li {
    color: ${props => props.theme.gray};
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "✓";
      color: ${props => props.theme.primary};
    }
  }
`;

const Earnings = styled.div`
  background: ${props => props.theme.bgLight};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  h4 {
    color: ${props => props.theme.black};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.primary};
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.theme.secondary};
  }
`;

const PlatformCard = ({ platform }) => {
  const {
    id,
    name,
    logo,
    description,
    features,
    earnings,
    path
  } = platform;

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PlatformLogo>
        <img src={logo} alt={`${name} logo`} />
      </PlatformLogo>
      <PlatformName>{name}</PlatformName>
      <Description>{description}</Description>
      <Features>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </Features>
      <Earnings>
        <h4>Average Earnings</h4>
        <p>{earnings}</p>
      </Earnings>
      <LearnMoreButton to={path}>
        Learn More
      </LearnMoreButton>
    </Card>
  );
};

export default PlatformCard; 