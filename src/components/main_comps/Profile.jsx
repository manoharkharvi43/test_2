import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import LocationMap from "../main_comps/GoogleMap";
import { BsChatSquare } from "react-icons/bs";

function Profile() {
	const single_user = useSelector((state) => state);
	const [toggle_chat, set_toggle_chat] = useState(false);

	console.log(single_user.users.map((data) => data.id));
	const togglechat = () => {
		if (toggle_chat) set_toggle_chat(false);
		else set_toggle_chat(true);
	};

	return (
		<>
			<div>
				<div className="profile_container">
					<div className="profile_header">
						<h4 style={{ marginLeft: "30px" }}>profile</h4>

						<div
							className="profile_img"
							onClick={() =>
								alert(
									`loged in as ${single_user.users.map((data) => data.name)}`
								)
							}
						>
							<img
								src={single_user.users.map((data) => data.profilepicture)}
								alt="loading"
								width="40px"
								height="40px"
								style={{ borderRadius: "100%" }}
							/>

							<div className="profile_name">
								<h6>{single_user.users.map((data) => data.name)} </h6>
							</div>
						</div>
					</div>

					<div className="profile_body_1">
						<img
							src={single_user.users.map((data) => data.profilepicture)}
							alt="loading"
							width="200px"
							height="200px"
							style={{ borderRadius: "100%" }}
						/>

						<h3 style={{ color: "#424141" }} className="username">
							{single_user.users.map((data) => data.name)}{" "}
						</h3>

						<div className="user_details">
							<table>
								{single_user.users.map((data) => (
									<>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "0px" }}>
													<span style={{ color: "grey" }}>username :</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.username}
													</span>
												</th>
											</tr>
										</tbody>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "0px" }}>
													<span style={{ color: "grey" }}>email:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.email}{" "}
													</span>
												</th>
											</tr>
										</tbody>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "0px" }}>
													<span style={{ color: "grey" }}>phone:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.phone}{" "}
													</span>
												</th>
											</tr>
										</tbody>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "0px" }}>
													<span style={{ color: "grey" }}>website:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.website}{" "}
													</span>
												</th>
											</tr>
										</tbody>
									</>
								))}
							</table>
						</div>
						<div className="company_details">
							<table>
								<tbody>
									<tr>
										<td style={{ marginRight: "10px" }}>
											<span style={{ color: "grey" }}>company</span>
										</td>
									</tr>
								</tbody>
								{single_user.users.map((data) => (
									<>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "10px" }}>
													<span style={{ color: "grey" }}>Name:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.company.name}
													</span>
												</th>
											</tr>
										</tbody>

										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "10px" }}>
													<span style={{ color: "grey" }}>catchPhrase:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.company.catchPhrase}
													</span>
												</th>
											</tr>
										</tbody>
										<tbody>
											<tr style={{ marginBottom: "10px" }}>
												<td style={{ marginRight: "10px" }}>
													<span style={{ color: "grey" }}>bs:</span>
												</td>
												<th>
													<span style={{ color: "#474747" }}>
														{data.company.bs}
													</span>
												</th>
											</tr>
										</tbody>
									</>
								))}
							</table>
						</div>
					</div>

					<div className="profile_body_2">
						<table>
							<tbody>
								<tr>
									<td style={{ marginRight: "10px" }}>
										<span style={{ color: "grey" }}>Address</span>
									</td>
								</tr>
							</tbody>
							{single_user.users.map((data) => (
								<>
									<tbody>
										<tr style={{ marginBottom: "10px" }}>
											<td style={{ marginRight: "30px" }}>
												<span style={{ color: "grey" }}>Street:</span>
											</td>
											<th>
												<span style={{ color: "#474747" }}>
													{data.address.street}
												</span>
											</th>
										</tr>
									</tbody>
									<tbody>
										<tr style={{ marginBottom: "10px" }}>
											<td style={{ marginRight: "30px" }}>
												<span style={{ color: "grey" }}>Suite:</span>
											</td>
											<th>
												<span style={{ color: "#474747" }}>
													{data.address.suite}
												</span>
											</th>
										</tr>
									</tbody>
									<tbody>
										<tr style={{ marginBottom: "10px" }}>
											<td style={{ marginRight: "30px" }}>
												<span style={{ color: "grey" }}>City:</span>
											</td>
											<th>
												<span style={{ color: "#474747" }}>
													{data.address.city}
												</span>
											</th>
										</tr>
									</tbody>
									<tbody>
										<tr style={{ marginBottom: "10px" }}>
											<td style={{ marginRight: "30px" }}>
												<span style={{ color: "grey" }}>Zipcode:</span>
											</td>
											<th>
												<span style={{ color: "#474747" }}>
													{data.address.zipcode}
												</span>
											</th>
										</tr>
									</tbody>
								</>
							))}
						</table>

						<div className="map_container">
							{single_user.users.map((data) => (
								<>
									<LocationMap
										api="AIzaSyDyOQ2YwWVJIKH9DyFj8zUa_qlJhrn2Bq0"
										lat={data.address.geo.lat}
										lat={data.address.geo.lng}
									/>
								</>
							))}
						</div>

						<div
							className={toggle_chat ? "chat_box_show" : "chat_box"}
							onClick={togglechat}
						>
							<BsChatSquare
								size={26}
								color="#c8cbcf"
								style={{ margin: "10px" }}
							/>
							<h5 style={{ color: "#c8cbcf", margin: "2%" }}>Chats</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
