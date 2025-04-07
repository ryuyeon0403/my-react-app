import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE_URL;
// https://apidev.careern.kr/v1/admin/login

export const adminLogin = ({
	callBack,
}: {
	callBack?: (data: any) => void;
}) => {
	const navigate = useNavigate();
	const mutation = useMutation(
		(reqData: any) =>
			fetch(`${API_URL}/v1/admin/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(reqData),
			}).then((response) => response.json()),
		{
			onSuccess: (data: any) => {
				callBack?.(data);
			},
		}
	);
	return mutation;
};
