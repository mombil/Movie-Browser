import styled from "styled-components";

import {Header} from "../../common/Header";

export const PeopleHeader = styled(Header)`
  width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    width: 1136px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
    width: 904px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    width: 672px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 440px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 296px;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDevices}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PeopleTile = styled.div`
  max-width: 208px;
  min-height: 339px;
  border-radius: 5px;
  gap: 12px;
  padding: 16px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: scale(105%);
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    max-width: 136px;
    min-height: 245px;
    display: flex;
  flex-direction: column;
  align-items: center;
  }
`;
