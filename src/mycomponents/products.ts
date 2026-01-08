type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    images: [
        string,
        string,
        string,
        string
    ]
}

export const products:Product[] = [
    {
        id: 1,
        name: "Africa Chair",
        price: 100.00,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates maiores quaerat necessitatibus! Accusantium facilis, temporibus at tempora iste repudiandae vitae, rem laboriosam dolor veniam consequuntur nihil nemo distinctio voluptatem. Sint vel laboriosam corporis delectus sed quisquam quos inventore nemo animi commodi asperiores fugit aperiam, totam, alias tempora? Iste voluptatum cum nemo dicta voluptate ab corrupti, nobis deleniti quaerat impedit!",
        images: [
            "./product-1.jpg",
            "./product-1-1.jpg",
            "./product-1-2.jpg",
            "./product-1-3.jpg"
        ]
    },
    {
        id: 2,
        name: "Africa Chair",
        price: 100.00,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates maiores quaerat necessitatibus! Accusantium facilis, temporibus at tempora iste repudiandae vitae, rem laboriosam dolor veniam consequuntur nihil nemo distinctio voluptatem. Sint vel laboriosam corporis delectus sed quisquam quos inventore nemo animi commodi asperiores fugit aperiam, totam, alias tempora? Iste voluptatum cum nemo dicta voluptate ab corrupti, nobis deleniti quaerat impedit!",
        images: [
            "./product-1.jpg",
            "./product-1-1.jpg",
            "./product-1-2.jpg",
            "./product-1-3.jpg"
        ]
    },
    {
        id: 3,
        name: "Africa Chair",
        price: 100.00,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates maiores quaerat necessitatibus! Accusantium facilis, temporibus at tempora iste repudiandae vitae, rem laboriosam dolor veniam consequuntur nihil nemo distinctio voluptatem. Sint vel laboriosam corporis delectus sed quisquam quos inventore nemo animi commodi asperiores fugit aperiam, totam, alias tempora? Iste voluptatum cum nemo dicta voluptate ab corrupti, nobis deleniti quaerat impedit!",
        images: [
            "./product-1.jpg",
            "./product-1-1.jpg",
            "./product-1-2.jpg",
            "./product-1-3.jpg"
        ]
    },
];