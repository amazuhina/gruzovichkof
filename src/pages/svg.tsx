import { data } from '../data';
import MuiGrid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import { CardContentSvg } from '@components/CardContentSvg';
import { FC } from 'react';



const SvgPage: FC = () => {

    return (
        <div className='wrapper'>
            <MuiGrid container rowSpacing={4} columnSpacing={2}>
                {
                    data.map(i =>
                        <MuiGrid item xs={4} key={i.title}>
                            <MuiCard className='card-item'>
                                <CardContentSvg
                                    title={i.title}
                                    icon={i.icon}
                                    description={i.description}
                                />
                            </MuiCard>
                        </MuiGrid>
                    )
                }
            </MuiGrid>
        </div>
    )
}

export default SvgPage