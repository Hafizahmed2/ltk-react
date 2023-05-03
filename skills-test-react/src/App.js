import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
	
  return (
    <Container maxWidth="sm">
			<BrowserRouter>
				<AccountMenu />
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						React Skills test
					</Typography>
				</Box>
				<Routes>
					<Route path='/todo' element={<BasicForm />} />
				</Routes>
			</BrowserRouter>
    </Container>
  );
}
