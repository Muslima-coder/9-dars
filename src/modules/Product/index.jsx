import {  product1, product2, product3, product4 } from "../../assets/images"
import ProductItem from "../../components/productsItem"


function Product () {
       const ProductList = [
            {
                id:1,
                img: product1,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:2,
                img:product2 ,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:3,
                img: product3,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:4,
                img: product4,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:5,
                img: product1,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:6,
                img: product2,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:7,
                img: product3,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:8,
                img: product4,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:9,
                img: product1,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:10,
                img: product2,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:11,
                img: product3,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:12,
                img: product4,
                title:"All Natural Makeup Beauty Cosmetics",
            },
             {
                id:13,
                img: product4,
                title:"All Natural Makeup Beauty Cosmetics",
            },
        ]

        return(
            <section>
                <div className="containers ">
                    <div className="text-center">
                        <h2 className="font-bold text-[30px] text-[rgba(17,17,17,1)] mb-[32px]">Our products</h2>
                    <p className="font-normal text-[14px] text-[rgba(86,86,86,1)] mb-[49px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
                    <div className="flex items-center gap-[33px] justify-center">
                        <a href="#">new products</a>
                        <a href="#">onsale</a>
                        <a href="#">upcoming products</a>
                    </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-[30px] ">
                        {ProductList.map(item => <ProductItem key={item.id} item={item} /> )}
                    </div>
                </div>
            </section>
        )
}


export default Product