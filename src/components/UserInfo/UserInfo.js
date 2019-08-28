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

		if (isLoading) return (
			<p> Загрузка информации о пользователе </p>
		);

		if (data === null) return (
			<p className="t-no-user-info">
				Нет информации о пользователе
			</p>
		);

		if (Object.keys(data)) return (
			<div>
				<p>
					{ data.message }
					<br/>
					Информация о пользователе не найдена
				</p>
			</div>
		);

		return (
			<div className={styles.root}>
				<div className={styles.imageWrapper}>
					<img
						className={styles.image}
						src={data.avatar_url}
						alt={`${ data.name } Avatar`}
					/>
				</div>
				<div>
					<p className="t-user-name">{ data.name }</p>
					<p className="t-user-bio">
						{ data.bio }
					</p>
				</div>
			</div>
		);
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
