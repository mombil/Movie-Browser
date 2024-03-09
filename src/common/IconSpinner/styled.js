import styled from "styled-components";
import { ReactComponent as IconSpinerSvg } from "../../images/icon-spinner.svg";

export const StyledIconSpiner = styled(IconSpinerSvg)`
  animation: rotation 1.2s linear infinite;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  width: 91px;
  height: 91px;
`;

export const IconWraper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    margin: 18px;
  }
`;
