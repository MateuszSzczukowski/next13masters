import { ProductItemDetailsPropsType } from "./ProductItemDetails.types";
import { ProductItemImagePropsType } from "./ProductItemImage.types";

export type ProductItemPropsType = {
	id: string;
	image: ProductItemImagePropsType;
	details: ProductItemDetailsPropsType;
};
