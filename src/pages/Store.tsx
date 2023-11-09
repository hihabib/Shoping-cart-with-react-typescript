import {Col, Row} from "react-bootstrap";
import {storeProducts} from "../data.ts";
import Product from "../components/Product.tsx";

const Store = () => {
    return (<div>
            <Row lg={4} md={3} sm={2} xs={1} className={'g-4'}>
                {storeProducts.map(product => {
                    return (<Col key={product.id}>
                            <Product product={product}/>
                        </Col>)
                })}

            </Row>
        </div>);
};

export default Store;