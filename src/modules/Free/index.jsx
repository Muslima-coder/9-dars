import { fimg1, fimg2, fimg3, free1} from "../../assets/images"

function freeShop() {
    return(
        <section>
            <div className="containers ">
               <div className="bg-[rgba(90,90,201,1)] !py-[61px] !px-[18px] !mb-[80px]">
                 <ul className="flex justify-around items-center  ">
                    <li className="flex gap-[16px] items-center ">
                        <img src={free1} alt="img" />
                        <div>
                            <strong className="font-bold text-[18px] text-[rgba(255,255,255,1)] ">Free Shipping</strong>
                            <p className="font-normal text-[14px] text-[rgba(255,255,255,1)] ">On all orders over $75.00</p>
                        </div>
                    </li>
                    <li className="flex gap-[16px] items-center ">
                        <img src={free1} alt="img" />
                        <div>
                            <strong className="font-bold text-[18px] text-[rgba(255,255,255,1)] ">Free Shipping</strong>
                            <p className="font-normal text-[14px] text-[rgba(255,255,255,1)] ">On all orders over $75.00</p>
                        </div>
                    </li>
                    <li className="flex gap-[16px] items-center ">
                        <img src={free1} alt="img" />
                        <div>
                            <strong className="font-bold text-[18px] text-[rgba(255,255,255,1)] ">Free Shipping</strong>
                            <p className="font-normal text-[14px] text-[rgba(255,255,255,1)] ">On all orders over $75.00</p>
                        </div>
                    </li>
                    <li className="flex gap-[16px] items-center ">
                        <img src={free1} alt="img" />
                        <div>
                            <strong className="font-bold text-[18px] text-[rgba(255,255,255,1)] ">Free Shipping</strong>
                            <p className="font-normal text-[14px] text-[rgba(255,255,255,1)] ">On all orders over $75.00</p>
                        </div>
                    </li>
                </ul>
               </div>

                <div className="flex justify-between items-center">
                    <img src={fimg1} alt="photo" />
                    <img src={fimg2} alt="photo" />
                    <img src={fimg3} alt="photo" />
                </div>
            </div>
        </section>
    )
}

export default freeShop