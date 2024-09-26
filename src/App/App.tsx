import { GlTemplate } from "gitlanding/GlTemplate";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { ThemeProvider } from "../theme";

export function App() {
	return (
		<ThemeProvider>
			<GlTemplate
				header={<Header />}
				headerOptions={{
					"position": "sticky",
					"isRetracted": "smart",
				}}
				footer={<Footer />}
				body={<Home />}
			/>
		</ThemeProvider>
	);
}