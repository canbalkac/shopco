import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

type productReviewProps = {
  star: number;
  name: string;
  review: string;
};

const ProductReview = ({ star, name, review }: productReviewProps) => {
  const fullStars = Math.floor(star);
  const hasHalfStar = star % 1 >= 0.5;

  return (
    <Card className="w-full max-w-md mx-auto rounded-3xl">
      <CardHeader>
        <CardTitle className="flex">
          {/* Full Stars */}
          {Array.from({ length: fullStars }, (_, i) => (
            <Star key={i} fill="orange" color="orange" />
          ))}

          {/* Half Star */}
          {hasHalfStar ? <StarHalf fill="orange" color="orange" /> : ""}
        </CardTitle>
        <CardDescription className="font-bold text-black">
          {name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{review}</p>
      </CardContent>
    </Card>
  );
};

export default ProductReview;
