import React, { useContext } from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { HomeContext } from '../Contexts';

export default function ListCategories() {
	const { listCategories, selectedCategory } = useContext(HomeContext);
	const listSelectedCategories = React.useMemo(() => {
		if (selectedCategory === 'all') {
			return listCategories;
		}

		return listCategories.filter((c) => c.type === selectedCategory);
	}, [listCategories, selectedCategory]);

	return (
		<Container className='portfolio_grid tekup_portfolio pix-is-loaded'>
			{listSelectedCategories.map(({ title, imageUrl, link }, index) => (
				<Item
					key={index}
					className='col-12 pb-4 grid-item category-mobile-app-webites-en col-md-6 col-lg-4'
					data-category='transition'
				>
					<a href={link} className=' fly-sm'>
						<div
							className='card bg-white rounded-lg overflow-hidden fly-sm shadow shadow-hover pix-mb-302 pix-waiting pix-animate fade-in animated'
							data-anim-type='fade-in'
							data-anim-delay='200'
						>
							<img
								width='418'
								height='418'
								src={imageUrl}
								className='card-img-top img-fluid'
								alt={title}
								decoding='async'
								loading='lazy'
								sizes='(max-width: 418px) 100vw, 418px'
							/>
							<div className='card-body'>
								<div className='d-flex justify-content-between align-items-center'>
									<h6 className='card-title mb-0 text-heading-default'>
										<strong>{title}</strong>
									</h6>
									<ChevronRight />
								</div>
							</div>
						</div>
					</a>
				</Item>
			))}
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	position: relative;
	height: 607.968px;
	display: flex;
	flex-wrap: wrap;
`;

const Item = styled.div``;
