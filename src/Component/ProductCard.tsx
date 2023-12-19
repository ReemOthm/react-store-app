import { IProduct } from "../Interface";
import { descriptionSlice, numberWithCommas } from "../functions";
import Button from "./UI/Button";
import ColorCircles from "./UI/ColorCircles";
import Image from "./Image";

interface IProps {
    product: IProduct,
    setProductEdit: (product: IProduct) => void,
    openEditModal : ()=> void,
    index: number,
    setProductEditIndex: (value:number)=> void, 
    openRemoveModal : ()=> void
}

const ProductCard = ({product, setProductEdit, openEditModal,index,setProductEditIndex, openRemoveModal}: IProps)=>{

    const {title,description,price,imageURL,colors,category} = product;

    //----------Render-------------//
    const renderColorCircles = colors.map(color=><ColorCircles key={color} color={color}/>);

    //----------HANDLER-----------//
    const onEdit = ()=> {
        setProductEdit(product);
        openEditModal();
        setProductEditIndex(index)
    }

    const onRemove = ()=> {
        setProductEdit(product);
        openRemoveModal();
        setProductEditIndex(index)
    }

    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 p-2 rounded-md border border-gray-200 shadow-xl">
            <div>
                <Image imageUrl={imageURL} alt={category.name} className="rounded-md w-full h-52 lg:object-cover" />
            </div>
            <div className="px-4 py-2">
                <h3 className="uppercase text-blue-950 font-bold">{title}</h3>
                <p className="text-black font-medium h-[48px]">{descriptionSlice(description)}</p>
                <div className="flex items-center mt-2 flex-wrap space-x-1">
                    {!colors.length? <p className="min-h-[20px] font-medium text-red-400 text-sm">No Colors Available</p> :  renderColorCircles}
                </div> 
                
                <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{numberWithCommas(price)}SR</div>
                    <div className="flex items-center font-medium text-xs">
                        <span className="mr-1">{category.name}</span>
                        <Image className="w-10 h-10 rounded-full " imageUrl={category.imageURL} alt={category.name}/>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                <Button className="bg-blue-900 hover:bg-blue-800"  onClick={onEdit}>EDIT</Button>
                <Button className="bg-red-800  hover:bg-red-700" onClick={onRemove}>REMOVE</Button>
            </div>
            </div>
        </div>
    )
}

export default ProductCard;