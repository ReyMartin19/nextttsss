interface ProductProps{
    name: string;
    price: number;
}

export default function Product({name, price}: ProductProps){
    return (
        <>
            <h1>{name}: {price}</h1>
        </>
    )
}
