import { useContext } from 'react';

import { HomeContext } from '../Contexts';
import { CategoryMenuItem } from '../Types';

export default function CategoryMenu() {
	const { selectedCategory, selectCategory } = useContext(HomeContext);

	const categoryMenu: CategoryMenuItem[] = [
		{
			type: 'all',
			title: 'All',
		},
		{
			type: 'manpower-supply',
			title: 'Manpower Supply',
		},
		{
			type: 'mobile-app-or-websites',
			title: 'Mobile App / Websites',
		},
		{
			type: 'ui-ux-design',
			title: 'UI/UX Design',
		},
	];

	return (
		<div className='col-12 pix-pb-50 text-center  pix-portfolio-nav'>
			{categoryMenu.map(({ type, title }, index) => (
				<a
					key={index}
					href='#'
					data-category='*'
					className={`tekup_portfolio_filter btn btn-link btn-colored-shadow ${
						type === selectedCategory ? 'is-checked' : ''
					}`}
					onClick={() => selectCategory(type)}
				>
					<strong>{title}</strong>
				</a>
			))}
		</div>
	);
}
