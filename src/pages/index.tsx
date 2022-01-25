import { data } from '../data';
import MuiGrid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import { CardContent } from '@components/CardContent';
import { FC } from 'react';






const HomePage: FC = () => {

    return (
        <div className='wrapper'>
            <MuiGrid container rowSpacing={4} columnSpacing={2}>
                {
                    data.map(i =>
                        <MuiGrid item xs={4} key={i.title}>
                            <MuiCard className='card-item'>
                                <CardContent
                                    title={i.title}
                                    icon={i.icon}
                                />
                            </MuiCard>
                        </MuiGrid>
                    )
                }
            </MuiGrid>
        </div>
    )
}

export default HomePage