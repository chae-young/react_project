import styles from 'styled-components';
const breakpoint = 767

export const ListBox = styles.div`
    width:50%;

    & .input-box{
        display:flex;
        margin:20px 0;
    }
    & .line{
        text-decoration:line-through;
    }
    @media (max-width: ${breakpoint}px) {
        width:100%;
    }       
`