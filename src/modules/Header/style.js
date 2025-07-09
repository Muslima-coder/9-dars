import styled from "styled-components";

export const HeaderBottomContent = styled.div`
    padding: 23px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        align-items: center;
        gap: 50px;

        a{
            font-weight: 600;
            font-size: 14px;
            line-height: 30px;
            letter-spacing: 0%;
            text-align: center;
            vertical-align: middle;
            text-transform: uppercase;
            color: rgba(17, 17, 17, 1);
            transition: all 0.4s;
        }
         a:hover{
            color: rgba(90, 90, 201, 1);
         }
    }

    div{
    display: flex;
    align-items: center;
    gap: 32px;
    }
`;
