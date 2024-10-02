import styled from "styled-components";


export const SharedLayoutStyled = styled.div`
    height: 97svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main{
        display: flex;
    }

    main{
        flex: 1 1 auto;
        padding: 32px;
        background-color: ${p => p.theme.color.page_bg};
    }
`