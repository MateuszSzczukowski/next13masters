import Image from "next/image";
import { ProductList } from "./ui/components/organisms/ProductList";
import { productList } from "@/app/json/productList";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between bg-white p-24">
				<ProductList products={productList} />
			</main>
		</>
	);
}
