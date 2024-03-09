import { movie } from "../../features/Routes";
import {
  ErrorHeader,
  ErrorContainer,
  StyledParagraph,
  StyledLink,
  DangerIcon,
} from "./styled";

const ErrorPage = () => (
  <ErrorContainer>
    <DangerIcon />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <StyledParagraph>
      Please check your network connection and try again
    </StyledParagraph>
    <StyledLink to={movie}>Back to home page</StyledLink>
  </ErrorContainer>
);

export default ErrorPage;
