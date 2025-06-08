export type Review = {
  name: string;
  rating: number; // örn: 4.5
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: "Samantha D.",
    rating: 4.5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's become my favorite go-to shirt.",
    date: "2023-08-14",
  },
  {
    name: "Alex M.",
    rating: 5,
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Thumbs up from me.",
    date: "2023-08-15",
  },
  {
    name: "Ethan R.",
    rating: 4,
    comment:
      "Minimalistic yet stylish pattern caught my eye, and the fit is perfect.",
    date: "2023-08-16",
  },
  {
    name: "Olivia P.",
    rating: 4.5,
    comment:
      "As a UI/UX enthusiast, I value simplicity and functionality. It's evident that the designer poured creativity into it.",
    date: "2023-08-17",
  },
  {
    name: "Liam K.",
    rating: 5,
    comment:
      "The fabric is soft, and the design speaks volumes about the designer’s skill.",
    date: "2023-08-18",
  },
  {
    name: "Ava H.",
    rating: 4.5,
    comment:
      "The intricate details and thoughtful layout make this shirt a conversation starter.",
    date: "2023-08-19",
  },
];
