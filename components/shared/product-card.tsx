import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import AddCartBtn from "./addcartbtn";

export default function ProductCard(product: IProduct) {
  const { id, image, title, price, category } = product;
  return (
    <Card className="w-full max-w-xs cursor-pointer md:hover:scale-105 md:transition-all md:hover:shadow-2xl">
      <Link href={"/product/" + id}>
        <Image
          src={image}
          width={400}
          height={250}
          alt="Product"
          className="aspect-[1.6] object-contain"
        />
        <CardHeader>
          <CardTitle className="text-md font-bold line-clamp-1">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Badge variant="secondary">{category}</Badge>
          <p className="text-base font-semibold text-gray-500">${price}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <AddCartBtn className="w-full" product={product} />
      </CardFooter>
    </Card>
  );
}
