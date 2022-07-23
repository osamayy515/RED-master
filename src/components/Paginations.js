import { Container, Pagination } from '@mui/material';
import React from 'react'

export default function Paginations() {
    return(
        <Container>
            {/* <Pagination count={10} shape="rounded" /> */}
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Container>
    );
}
