// import { AxiosError } from "axios";
// import { useQuery } from "react-query";
// import { fetchAdminData } from "@/src/shared/@common/utils/fetch";

// //query get
// export const useAdminDetailQuery = (memNo: string, afcoYn?: string) => {
// 	const reqData = {
// 		memNo: memNo,
// 		afcoYn: afcoYn,
// 	};

// 	const { isLoading, data, isError, error, isFetching, refetch } = useQuery<
// 		any[],
// 		AxiosError
// 	>(
// 		[MEMBER_ADMIN_DETAIL, memNo],
// 		() => fetchAdminData(MEMBER_ADMIN_DETAIL, reqData),
// 		{
// 			enabled: !!memNo,
// 			refetchOnWindowFocus: false,
// 			staleTime: 0,
// 			// select: (data) => {
// 			// 	return data.data.data as IAdminDetail;
// 			// },
// 		}
// 	);

// 	return { isLoading, data, isError, error, isFetching, refetch };
// };
