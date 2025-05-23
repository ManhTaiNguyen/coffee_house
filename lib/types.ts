export type BaseProps = {
    children: React.ReactNode;
    className?: string;
}

export type NavLink = {
    label: string;
    href: string;
}

export type Temperature = "Hot" | "Cold";

export type PopularProduct = {
    id: number;
    name: string;
    price: number;
    rating: number;
    temperatures: Temperature[];
    image: string;
}

export type TDeliveryStep = {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
}