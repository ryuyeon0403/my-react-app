import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../shared/styles/App.css";
import TestPage from "../pages/TestPage";
import LoginPage from "../pages/LoginPage";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<ReactQueryProvider>
			<HelmetProvider>
				{/* 라우터 처리 */}
				<Router>
					<Routes>
						<Route path="/test/:id" element={<TestPage />} />
						<Route path="/" element={<LoginPage />} />
					</Routes>
				</Router>
			</HelmetProvider>
		</ReactQueryProvider>
	);
}

export default App;
