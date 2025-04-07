import { adminLogin } from "@/shared/api/queries/mutations";
import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const { mutate } = adminLogin({
		callBack: (data) => {
			setOpen(true);
			if (data.code == "0000") {
				// alert("로그인 성공");
				navigate("/test/" + data.message + JSON.stringify(data.content));
			} else {
				// alert(data.message);
			}
		},
	});
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setId(event.target.value);
	};
	const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPwd(event.target.value);
	};

	return (
		<Stack spacing={1}>
			Login Page
			{/* 동적 메타데이터 변경 */}
			<Helmet>
				<title>소개 - MyApp</title>
				<meta name="description" content="우리에 대해 알아보세요." />
			</Helmet>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				color="success"
				open={open}
				onClose={() => setOpen(false)}
				message="로그인테스트"
			/>
			<TextField name="id" value={id} onChange={handleIdChange}>
				ID
			</TextField>
			<TextField
				name="pwd"
				value={pwd}
				onChange={handlePwdChange}
				type="password"
			>
				PWD
			</TextField>
			<Button
				variant="contained"
				onClick={() => {
					mutate({
						id: id,
						pwd: pwd,
						userType: "SA",
					});
				}}
			>
				Login
			</Button>
		</Stack>
	);
}

export default LoginPage;
