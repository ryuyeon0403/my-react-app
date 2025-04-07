import { Counter } from "@/features/counter/ui";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function TestPage() {
	const id = useParams().id;
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<Helmet>
				<title>테스트 페이지</title>
				<meta name="description" content="우리에 대해 알아보세요." />
			</Helmet>
			{id}
			<Counter />
		</div>
	);
}

export default TestPage;
