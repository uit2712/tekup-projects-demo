export type CategoryType = 'all' | 'manpower-supply' | 'mobile-app-or-websites' | 'ui-ux-design'

export type CategoryItem = {
    type: CategoryType;
    imageUrl: string;
    title: string;
    link: string;
}

export type CategoryMenuItem = {
    type: CategoryType;
    title: string
}