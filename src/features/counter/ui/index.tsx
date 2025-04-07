import { Button } from "@mui/material";
import React, { useState } from "react";

export const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="card">
			<Button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</Button>
		</div>
	);
};
