import MuiCardContent from '@mui/material/CardContent';
import { FC, useState } from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


export interface ICardComponentProps {
    title: string
    icon: string
    description: string
}


const styleCard = {
    cursor: 'pointer',
}

const styleModalWindow = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#ddd',
    p: 4,
    borderRadius: 1
}



export const CardContentSvg: FC<ICardComponentProps>  = ({title, icon, description}) => {

    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div >
            <MuiCardContent onClick={handleOpen} sx={styleCard}>
                <h1>{title}</h1>
                <MuiSvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </MuiSvgIcon>
            </MuiCardContent>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModalWindow}>
                    <p>{description}</p>
                </Box>
            </Modal>
        </div>
    )
}

