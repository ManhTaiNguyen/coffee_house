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