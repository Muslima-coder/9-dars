

function ProductItem ({item}) {
    return (
        <div className="w-[302px]  shadow-lg shadow-slate-300 p-[25px] ">
            <img className="mb-[25px]" src={item.img} alt="img" width={302} height={458} />
            <div className="px-[18px]">
                <p className="font-semibold text-[16px] text-[rgba(17,17,17,1)] mb-[35px] "> {item.title}</p>
           <div className="flex justify-between items-center">
             <strong className="font-bold text-[16px] text-[rgba(17,17,17,1)] mb-[35px] ">$11.90</strong>
            <div className="flex items-center w-[40px] h-[40px] rounded-full bg-[rgba(246,246,246,1)] ">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.92884 5.43532H9.26975V14.799C9.26975 15.3368 9.17695 15.8027 8.99134 16.1967C8.80952 16.5906 8.53301 16.8956 8.1618 17.1115C7.79437 17.3274 7.33036 17.4353 6.76975 17.4353C6.7243 17.4353 6.67884 17.4353 6.63339 17.4353C6.58793 17.4353 6.54248 17.4353 6.49702 17.4353V16.1853C6.54248 16.1853 6.58414 16.1853 6.62202 16.1853C6.6599 16.1853 6.70157 16.1853 6.74702 16.1853C7.15611 16.1853 7.45536 16.0641 7.64475 15.8217C7.83414 15.5831 7.92884 15.2421 7.92884 14.799V5.43532ZM6.08793 9.61714V8.57169H11.0879V9.61714H6.08793Z" fill="#111111"/>
                </svg>
            </div>
           </div>
            </div>
        </div>
    )
}
export default ProductItem