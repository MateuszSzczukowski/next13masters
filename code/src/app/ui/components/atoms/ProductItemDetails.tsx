import { type ProductItemDetailsPropsType } from "@/app/types/ProductItemDetails.types";
import { formatPrice } from "@/app/utils/formatPrice";

export const ProductItemDetails = ({
	name,
	category,
	price,
}: ProductItemDetailsPropsType) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href="#">
						<span
							aria-hidden="true"
							className="absolute inset-0"
						></span>
						{name}
					</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				{formatPrice(price)}
			</p>
		</div>
	);
};
