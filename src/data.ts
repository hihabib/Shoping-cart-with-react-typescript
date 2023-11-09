import { v4 as uuidV4 } from 'uuid';

export interface StoreProduct {
    id: string,
    image: string,
    title: string,
    price: number
}
export interface CartProduct extends StoreProduct {
    quantity: number
}

export const storeProducts: StoreProduct[] = [
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Cooling fan",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Ram",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile power-bank",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Charger",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Case",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Stand",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Cooling Pad",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Cover",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Stand",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Keyboard",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Backpack",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Headphones",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Cable",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Mouse",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Screen Protector",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Mouse Pad",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Wireless Charger",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Docking Station",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Speaker",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Webcam",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Stylus Pen",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop External Hard Drive",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Wall Mount",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Microphone",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Tripod",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Stand",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Cable Organizer",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Cable Management",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Phone Holder",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Sleeve",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Privacy Screen",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Speaker Stand",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Car Mount",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Laptop Cooling Stand",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Monitor Wall Shelf",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Desktop Cable Clips",
        price: 500
    },
    {
        id: uuidV4(),
        image: "http://placehold.co/600x600",
        title: "Mobile Phone Armband",
        price: 500
    },
];
