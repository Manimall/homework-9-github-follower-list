import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { connect } from 'react-redux';
import { getUserData, getIsLoading } from "../../modules/User";

class UserInfo extends PureComponent {
	render() {
		// Покажите статус загрузки
		// Если данные не были загружены - сообщите об этом пользователю

		console.log(this.props);
		const { isLoading, data } = this.props;
		console.log(data);

		if (isLoading) return (
			<p> Загрузка информации о пользователе </p>
		);

		if (data === null) return (
			<p className="t-no-user-info">
				Нет информации о пользователе
			</p>
		);


		else {
			const { name, bio, avatar_url, } = data;
			return (
				<div className={styles.root}>
					<div className={styles.imageWrapper}>
						<img
							className={styles.image}
							src={avatar_url}
							alt={`${ name } Avatar`}
						/>
					</div>
					<div>
						<p className="t-user-name">{ name }</p>
						<p className="t-user-bio">
							{ bio }
						</p>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	data: getUserData(state),
	isLoading: getIsLoading(state),
});

// Используйте поля data, isLoading из стейта
export default connect(
	mapStateToProps
)(UserInfo);
