import { AppShell, Burger, Group, NavLink, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from '/logo.svg';
import { IconHome2 } from '@tabler/icons-react';

export function MainView() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding='md'
		>
			<AppShell.Header>
				<Group h='100%' px='md'>
					<Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
					<a
						href='/'
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '.5rem',
							cursor: 'pointer',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<img src={Logo} alt='Logo' height='40' />
						<Text size='xl'>Plottar</Text>
					</a>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p='md'>
				<NavLink
					href='/'
					label='Home'
					leftSection={<IconHome2 size='1rem' stroke={1.5} />}
				/>
			</AppShell.Navbar>
			<AppShell.Main>
				<Title order={1}>Welcome to Plottar</Title>
			</AppShell.Main>
		</AppShell>
	);
}
