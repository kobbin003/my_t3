// import { serverClient } from "./_trpc/serverClient";

import Hello from "./_components/Hello";

export default async function page() {
	return (
		<main>
			<Hello />
		</main>
	);
}
