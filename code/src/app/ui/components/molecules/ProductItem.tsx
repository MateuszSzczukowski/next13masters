import { ProductItemImage } from "@/app/ui/components/atoms/ProductItemImage";
import { ProductItemDetails } from "@/app/ui/components/atoms/ProductItemDetails";
import { type ProductItemPropsType } from "@/app/types/ProductItem.types";

export const ProductItem = ({
	image,
	details,
}: ProductItemPropsType) => {
	return (
		<>
			<ProductItemImage {...image} />
			<ProductItemDetails {...details} />
		</>
	);
};
