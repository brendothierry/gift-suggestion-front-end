import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    display: flex;
    background-color: rgba(113, 91, 241);
    box-shadow: 0 0 20px 3px rgba(137, 74, 238, 0.25);
    
    > svg {
        position: absolute;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
        transition: 0.3s ease;
        opacity: 1;
    }
    svg:hover{
        opacity:0.5;
    }
    .logo-container{
        display: flex;
        flex: 1;
        justify-content: center;
    }
    .logo-navbar{
        height: 90px;
        cursor: pointer;
        margin-top 3px;
    }
    .container-notification{
        margin-top: 30px;
        margin-right: 30px;
    }
    .notification{
        transition: opacity 0.3s ease;
        cursor: pointer;
        opacity: 1;
    }
    .notification:hover{
        opacity: 0.5;
    }
    .active{
        color: white;
    }
`;