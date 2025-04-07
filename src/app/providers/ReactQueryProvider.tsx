import { Alert } from "@mui/material";
import React, { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const ReactQueryProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const handleClick = (message: string) => {};

	const handleClose = () => {};

	const queryClient = useMemo(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						onError: (error: any) => {
							console.error("Global Query Error:", error);
							if (error.code == "ERR_NETWORK") {
								handleClick("SERVER ERROR, 관리자에게 문의 바랍니다.");
							}
							if (
								error.response?.data &&
								error.response?.data?.code !== "E500"
							) {
								handleClick(error?.message);
							}
						},
					},
					mutations: {
						onError: (error: any) => {
							console.error("Global Mutation Error:", error.code);
							if (error.code == "ERR_NETWORK") {
								handleClick("SERVER ERROR, 관리자에게 문의 바랍니다.");
							}
							if (
								error.response?.data &&
								error.response?.data?.code !== "E500"
							) {
								handleClick(error?.message);
							}
						},
					},
				},
			}),
		[]
	);

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={true} />
			{children}
		</QueryClientProvider>
	);
};
