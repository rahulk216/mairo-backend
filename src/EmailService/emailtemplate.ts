const email = ({ tentativePassword }) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
</head>
<body>
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
											<!-- LOGO -->
											<tr>
												<td bgcolor="#202f7d" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
													<table class="tabl" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
														<tr>
															<td align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 40px 10px 40px 10px;"> </td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td bgcolor="#202f7d" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 10px 0px 10px;">
													<table class="tabl" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
														<tr>
															<td bgcolor="#ffffff" align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
																<h1 style="font-size: 28px; font-weight: 400; margin: 3;">Welcome!</h1> <img class="logo" src="https://i.ibb.co/LJyWmyr/maiora-logo-blue.png" alt="maiora-logo-blue" border="0" style=" width: 250px; height: 150px;" width="150" height="150">
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td bgcolor="#f4f4f4" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 10px 0px 10px;">
													<table class="tabl" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
														<tr>
															<td bgcolor="#ffffff" align="left" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
																<p style="margin: 0;text-align:justify;">We're excited to have you get started. Use this password to login for the first time. </p>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff" align="left" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
																	<tr>
																		<td bgcolor="#ffffff" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 30px 30px;">
																			<table border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
																				<tr>
																					<td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 7px;" bgcolor="#202f7d"><p style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 2px 25px; border-radius: 7px;display: inline-block;" id="myText" onclick="copyToClipboard()">${tentativePassword}</p></td>
																				</tr>
																				<tr>
																					<td bgcolor="#ffffff" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
																						<p style="margin: 5;text-align:justify;">Click <a href="#" style="color:#202f7d; text-decoration:none;"> here </a> to login </p>
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr> <!-- COPY -->
														
														<tr>
															<td bgcolor="#ffffff" align="left" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
																<p style="margin: 0;text-align:center;">If you have any questions, email us at <a href="mailto:reachus@maiora.co" style="color:#202f7d; text-decoration:none;">reachus@maiora.co</a>.</p>
															</td>
														</tr>
														<tr>
															<td bgcolor="#ffffff" align="left" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
																<p style="margin: 0; font-weight:700">Cheers,<br>Maiora Tech</p>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td bgcolor="#f4f4f4" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 20px 10px 0px 10px;">
													<table class="tabl" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
													</table>
												</td>
											</tr>
											<tr>
												<td bgcolor="#f4f4f4" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 10px 0px 10px;">
													<table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
														<tr>
															<td bgcolor="#f4f4f4" align="left" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br>
																<p align="center">Copyright &copy; Maiora.</p>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
                    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
  <script>
    function copyToClipboard() {
      var text = document.getElementById("myText").textContent;
      navigator.clipboard.writeText(text).then(function() {
        Toastify({
          text: "Text copied!",
          duration: 2000,
          gravity: "bottom",
          position: "left"
        }).showToast();
      });
    }
  </script>
  </script>
</body>
</html>
`
}

export default email