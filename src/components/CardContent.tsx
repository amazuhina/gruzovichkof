import MuiCardContent from '@mui/material/CardContent';
import { FC } from 'react';



export interface ICardComponentProps {
    title: string
    icon: string
}



export const CardContent: FC<ICardComponentProps>  = ({title, icon}) => {

    return (
        <MuiCardContent>
            <h1>{title}</h1>
            <img width={'100px'} height={'100px'} src={icon}/>
        </MuiCardContent>
    )
}

