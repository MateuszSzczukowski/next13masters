import { type ProductItemImagePropsType } from "@/types/ProductItemImage.types";

export const ProductItemImage = ({
	src,
	alt,
}: ProductItemImagePropsType) => {
	return (
		<div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
			<img
				className="h-full w-full object-cover object-center lg:h-full lg:w-full"
				src={src}
				alt={alt}
				height={320}
				width={320}
			/>
		</div>
	);
};
