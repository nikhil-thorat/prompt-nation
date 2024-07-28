import NextAuthProvider from "./NextAuthProvider";
import { ThemeProvider } from "./ThemeProvider";

const GlobalProvider = ({ children }) => {
	return (
		<NextAuthProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</NextAuthProvider>
	);
};

export default GlobalProvider;
