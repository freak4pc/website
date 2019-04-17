import styled from "styled-components";
import {
  space,
  alignItems,
  justifyContent,
  flex,
  flexDirection
} from "styled-system";

const StyledHeader = styled.header`
  ${space}
  ${alignItems}
  ${justifyContent}
  ${flex}
  ${flexDirection}
  background: #02192d; /* Old browsers */
  background: -moz-linear-gradient(top, #02192d 0%, #193f5d 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #02192d 0%,#193f5d 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #02192d 0%,#193f5d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02192d', endColorstr='#193f5d',GradientType=0 ); /* IE6-9 */
`;

export default StyledHeader;
