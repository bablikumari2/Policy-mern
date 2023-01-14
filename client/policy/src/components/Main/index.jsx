import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Policy</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
        
			<div className="policy-detail">
				<h2 style={{marginLeft:'600px'}}>Policy Details</h2>
				<label style={{marginLeft:'600px'}}>DOB</label>
				<input type="date" style={{marginLeft:'60px'}}/>
				<br/>
				<label style={{marginLeft:'600px'}}>Gender</label>
				<label style={{marginLeft:'40px'}}>Male</label>
				<input type="Checkbox" style={{marginLeft:'10px'}}></input>
				<label style={{marginLeft:'20px'}}>Female</label>
				<input type="Checkbox"></input>
				<br/>
				<label style={{marginLeft:'600px'}}>PPT</label>
				<select style={{marginLeft:'60px'}}>
				<option>--</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
				</select>
				<br/>
				<label style={{marginLeft:'600px'}}>PT</label>
				<select style={{marginLeft:'60px'}}>
				<option>--</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
					<option>14</option>
					<option>15</option>
				</select>
			</div>
		</div>
	);
};

export default Main;
