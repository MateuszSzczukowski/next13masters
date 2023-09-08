import { type ProductItemPropsType } from "../types/ProductItem.types";

export const productList: ProductItemPropsType[] = [
	{
		id: "1",
		image: {
			src: "https://picsum.photos/320/320",
			alt: "Unisex Long Sleeve Tee",
		},
		details: {
			name: "Unisex Long Sleeve Tee",
			category: "T-Shirts",
			price: 19.99,
		},
	},
	{
		id: "2",
		image: {
			src: "https://picsum.photos/320/320",
			alt: "Snapback",
		},
		details: {
			name: "Snapback",
			category: "Accessories",
			price: 12.99,
		},
	},
	{
		id: "3",
		image: {
			src: "https://picsum.photos/320/320",
			alt: "Unisex Zip Hoodie",
		},
		details: {
			name: "Unisex Zip Hoodie",
			category: "T-Shirts",
			price: 39.99,
		},
	},
	{
		id: "4",
		image: {
			src: "https://picsum.photos/320/320",
			alt: "Super Super Mug",
		},
		details: {
			name: "Super Super Mug",
			category: "Accessories",
			price: 14.99,
		},
	},
];
