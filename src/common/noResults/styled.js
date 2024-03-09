import styled from "styled-components";
import { ReactComponent as NoResultsSvg } from "../../images/noResults.svg";

export const NoResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoResultsIcon = styled(NoResultsSvg)`
  width: 668px;
  height: 508.63px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDevices}px) {
    width: 288px;
    height: 300px;
  }
`;
