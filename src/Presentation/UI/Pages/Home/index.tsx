import './Css/style.min.css';

import React from 'react';
import styled from 'styled-components';

import CategoryMenu from './CategoryMenu';
import { HomeContext } from './Contexts';
import ListCategories from './ListCategories';
import { CategoryItem, CategoryType } from './Types';

export default function Home() {
	const listCategories: CategoryItem[] = [
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-dsoft.jpg',
			title: 'Dsoft',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-mitc.jpg',
			title: 'MITC',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-tego.jpg',
			title: 'Tego',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-mor.jpg',
			title: 'MOR',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-code-complete.jpg',
			title: 'Code Complete',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'manpower-supply',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/09/doitac-smart-dev.jpg',
			title: 'Smart Dev',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'mobile-app-or-websites',
			imageUrl: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png',
			title: 'TOI 3D Customize E-commerce',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'mobile-app-or-websites',
			imageUrl: 'https://tekup.vn/wp-content/uploads/2022/09/image.png',
			title: 'E-learning – Internal training platform',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'mobile-app-or-websites',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png',
			title: 'Summer 21 Cosmetic E-commerce Platform',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'mobile-app-or-websites',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png',
			title: 'Kiva – Ambition to digital transformation in the brokerage assiduity',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'mobile-app-or-websites',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png',
			title: 'Boxgo – Professional Warehouse Management',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'ui-ux-design',
			imageUrl: 'https://tekup.vn/wp-content/uploads/2022/09/image.png',
			title: 'E-learning – Internal training platform',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'ui-ux-design',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png',
			title: 'Summer 21 Cosmetic E-commerce Platform',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'ui-ux-design',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png',
			title: 'Kiva – Ambition to digital transformation in the brokerage assiduity',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
		{
			type: 'ui-ux-design',
			imageUrl:
				'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png',
			title: 'Boxgo – Professional Warehouse Management',
			link: 'https://tekup.vn/portfolio-item/boxgo-nen-tang-quan-ly-kho-chuyen-nghiep/',
		},
	];

	const [selectedCategory, selectCategory] =
		React.useState<CategoryType>('all');

	return (
		<Container>
			<HomeContext.Provider
				value={{
					listCategories,
					selectedCategory,
					selectCategory,
				}}
			>
				<section className='vc_section sec-project-list vc_section_visible vc_custom_1661941027404'>
					<Wrapper
						data-vc-full-width='true'
						data-vc-full-width-init='true'
						className='vc_row wpb_row vc_row-fluid project-grid-warpper vc_row_visible'
					>
						<div className='wpb_column vc_column_container vc_col-sm-12 text-left'>
							<div className='vc_column-inner'>
								<div className='wpb_wrapper'>
									<div className=''>
										<div className='pix-portfolio'>
											<CategoryMenu />
											<ListCategories />
										</div>
									</div>
								</div>
							</div>
						</div>
					</Wrapper>
					<div className='vc_row-full-width vc_clearfix'></div>
				</section>
			</HomeContext.Provider>
		</Container>
	);
}

const Wrapper = styled.div`
	position: relative;
	left: -87px;
	box-sizing: border-box;
	width: 1134px;
	max-width: 1134px;
	padding-left: 87px;
	padding-right: 87px;
	margin: 0 auto;
`;

const Container = styled.main`
	margin: 0 auto;
`;
