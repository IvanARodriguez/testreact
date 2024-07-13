import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { MainView } from './MainView';

function App() {
	return (
		<MantineProvider defaultColorScheme='dark'>
			<MainView />
		</MantineProvider>
	);
}

export default App;
