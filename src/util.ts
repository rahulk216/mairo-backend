import email from './EmailService/emailtemplate';
import * as jwt from "jsonwebtoken";

export function generateJWT(name: string, id: number, role: string) {
	return jwt.sign(
		{
			name,
			id,
			role
		},
		process.env.JSON_T0KEN_KEY,
		{
			expiresIn: 3600000,
		},
	);
}

export function jwtDecode(token: string) {
	return jwt.decode(token)
}

export function verifyJwt(token: string) {
	return jwt.verify(token, process.env.JSON_T0KEN_KEY)
}

export const emailTemplate = ({tentativePassword}) => {return email({tentativePassword})}