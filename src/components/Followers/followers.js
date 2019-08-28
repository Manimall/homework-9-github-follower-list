import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { connect } from 'react-redux';
import { getFollowersData, getIsLoading } from "../../modules/Followers";
import cx from 'classnames';

class Followers extends PureComponent {
	render() {
		// Покажите статус загрузки
		// Если данные не были загружены - сообщите об этом пользователю

		console.log(this.props);

		const { isLoading, data } = this.props;

		if (isLoading) return (
			<p> Загрузка информации о пользователе </p>
		);

		if (data === null) return (
			<p className={`t-no-followers`}>
				Нет информации о подписчиках
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
			<div className={cx(styles.root, 't-followers')}>
				{/*
					Отобразите список пользователей.
					Для каждого пользователя покажите имя и аватарку.
				*/}

				{data.map(user => (
					<div key={user.id} className={cx(styles.follower)}>
						<img
							className={cx(styles.followerImg)}
							src={user.avatar_url}
							alt={`${user.login} profile photo`}
						/>
						<p className={cx(styles.followerLogin)}>
							{user.login}
						</p>
					</div>
				))}

			</div>
		);
	}
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
	data : getFollowersData(state),
	isLoading : getIsLoading(state),
}))(Followers);
