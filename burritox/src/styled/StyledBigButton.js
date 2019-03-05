import Styled from 'styled-components';

const StyledBigButton = Styled.button`
    background: ${(props) => props.theme.green};
    padding: 15px;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    color: white;
`;

export default StyledBigButton;
