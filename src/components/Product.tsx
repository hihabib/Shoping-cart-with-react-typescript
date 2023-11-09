import {Card, CardBody, CardImg, Stack} from "react-bootstrap";
import {StoreProduct} from "../data.ts";
import AddToCart from "./AddToCart.tsx";
import {currencyFormat} from "../utils/utils.ts";

interface ProductProps {
    product: StoreProduct
}

const Product = ({product}: ProductProps) => {

    return (<Card>
            <CardImg variant={'top'} src={product.image}/>
            <CardBody as={Stack} gap={3}>
                <Stack direction={'horizontal'}>
                    <strong className={'me-auto'}>{product.title}</strong>
                    <div>{currencyFormat(product.price)}</div>
                </Stack>
                <AddToCart id={product.id}/>
            </CardBody>
        </Card>);
};

export default Product;