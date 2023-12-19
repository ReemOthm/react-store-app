
import { useState , ChangeEvent, FormEvent} from 'react';
import './App.css'
import ProductCard from './Component/ProductCard'
import { categories, colors, formInputList, productInformation } from './data';
import Button from './Component/UI/Button';
import Modal from './Component/UI/Modal';
import Input from './Component/UI/Input';
import { IProduct, ProductNameTypes } from './Interface';
import { productValidation } from './Validation';
import ErrorMessage from './Component/ErrorMessage';
import ColorCircles from './Component/UI/ColorCircles';
import {v4 as uuidv4} from 'uuid';
import { Select } from './Component/UI/Select';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  //this empty object we use it many time so it's better to declare it first
  const defaultProduct = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: ''
    }
  };

  const toatStyle = {        
    backgroundColor: '#222',
    color: 'white'
  };

  /*---STATE---*/
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [products,setProducts] = useState<IProduct[]>(productInformation); //Products is the state for the data that has been stored in DATA file and we has assigned the inisial value to productInformation array so that we can rerender 
  const [product,setProduct] = useState<IProduct>(defaultProduct); // the state that record the data obtained from the inputs as a single product then reassign them with the array of products in setProducts that contained all the products
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProduct); // state to take the data from the product to update and reassign again after updated
  const [productEditIndex, setProductEditIndex] = useState<number>(0); // state for the index of the product in the array of products
  const [errors,setErrors] = useState({title: '', description: '',imageURL: '', price: ''});
  const [tempColors,setTempColors] = useState<string[]>([]); //everything needs to be a statte to be dynamic and we can rerender the components, this state for the colors
  const [selected, setSelected] = useState(categories[0]);
  const [colorError, setColorError] = useState('');

  
  /*---HANDLER---*/
  const closeModal = ()=> setIsOpen(false);
  const openModal = ()=>  setIsOpen(true);

  const closeEditModal = ()=> setIsEditOpen(false);
  const openEditModal = ()=>  setIsEditOpen(true);

  const closeRemoveModal = ()=> setIsRemoveModalOpen(false);
  const openRemoveModal = ()=>  setIsRemoveModalOpen(true);
  
  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target;
    setProduct({
      ...product,
      [name]: value
    });

    setErrors({
      ...errors,
      [name] : ''
    });
  }

  const onEditChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target;
    setProductEdit({
      ...productEdit,
      [name]: value
    });

    setErrors({
      ...errors,
      [name] : ''
    });
  }

  const onCancel = () => {
    setProduct(defaultProduct);
    setErrors({title: '', description: '',imageURL: '', price: ''});
    closeModal();
  }

  const onCancelEdit = () => {
    setTempColors([]);
    closeEditModal();
  }

  const onCancelRemove = () => {
    closeRemoveModal();
  }

  const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {title, description, imageURL, price} = product;
    const error = productValidation({title,description,imageURL,price});

    if(tempColors.length == 0){
      setColorError('please choose the colors of the product');
    }

    const hasErrorMsg = Object.values(error).some(value=> value=== '') && Object.values(error).every(value=>value==='');
    if(!hasErrorMsg){
      setErrors(error);
      return;
    }
    
    setProducts(prev=> [{...product, id: uuidv4(), colors: tempColors, category: selected},...prev]);
    setProduct(defaultProduct);
    setTempColors([]);
    closeModal();
    toast('Product Has Added', {style:toatStyle});
  }

  //----------------ON EDIT SUBMIT HANDLER
  const onEditSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {title, description, imageURL, price} = productEdit;
    const error = productValidation({title,description,imageURL,price});

    if(tempColors.length == 0){
      setColorError('please choose the colors of the product');
    }

    const hasErrorMsg = Object.values(error).some(value=> value=== '') && Object.values(error).every(value=>value==='');
    if(!hasErrorMsg){
      setErrors(error);
      return;
    }
    
    const updateProducts = [...products] // new array that contained all pervous data 
    updateProducts[productEditIndex] = {...productEdit, colors: tempColors.concat(productEdit.colors)} // in the index required update the data to the ProductEdit that has updated
    setProducts(updateProducts) // update all the Products List

    setProductEdit(defaultProduct);
    setTempColors([]);
    closeEditModal();
    toast('The Product Has Updated', {style: toatStyle});
  }

  // -----Remove Handler
  const onRemoveProduct = () => {
    const updateProducts = [...products] // new array that contained all pervous data 
    updateProducts.splice(productEditIndex,1);
    // const filtered = products.filter(product=> product.id !== productEdit.id); >>>>>>> Another solution (Course Code)
    setProducts(updateProducts);
    closeRemoveModal();
    toast(`The ${productEdit.title} Product Has Been Removed`, {style: toatStyle});
  }
  
  /*---RENDER---*/
  const renderProduct = products.map((p,index)=> 
    <ProductCard key={p.id} product={p} index={index} 
    setProductEditIndex={setProductEditIndex} setProductEdit={setProductEdit} openEditModal={openEditModal} openRemoveModal={openRemoveModal} />
  );

  const renderFormInputs = formInputList.map(input=>
  <label className='block font-medium text-gray-600' htmlFor={input.id} key={input.id}>
    {input.label}
    <Input type={input.type} name={input.name}  value={product[input.name]} onChange={onChangeHandler} 
    />
    <ErrorMessage msg={errors[input.name]} />
  </label>);

  //------------------------------- Product Edit Render
  const renderFormInputsToEdit = (id:string,label:string,name: ProductNameTypes) => {
    return (
      <label className='block font-medium text-gray-600' htmlFor={id}>
      {label}
      <Input type='text' name={name}  value={productEdit[name]} onChange={onEditChangeHandler} 
      />
      <ErrorMessage msg={errors[name]} />
    </label>
    )
  };
  
    const renderColorCircles = colors.map(color=><ColorCircles key={color} color={color} 
      onClick={()=>{
        if(tempColors.includes(color)){
          setTempColors(prev=> prev.filter(item=>item !== color));
          return;
        }
        if(productEdit.colors.includes(color)){
          setTempColors(prev=> prev.filter(item=>item !== color));
          return;
        }
        setTempColors((prev)=>[...prev,color])
        setColorError('');
      }
      }/>);

  const renderColorName = tempColors.map((temp)=> <span key={temp} className='block text-sm p-1 text-white rounded-md' style={{backgroundColor:temp}}>{temp}</span>);
  
  const renderColorNameToEdit = tempColors.concat(productEdit.colors).map((temp)=> 
  <span key={temp} className='block text-sm p-1 text-white rounded-md cursor-pointer' style={{backgroundColor:temp}}
      onClick={()=> {
        setTempColors(perv=> perv.filter(color=> color!== temp));
        setProductEdit({...productEdit, colors: productEdit.colors.filter(item=> item !== temp)}); 
        // Remove the colors name when updating
      }}
  >{temp}</span>);

  return (
    <>
      <header className='bg-gray-100 p-5 mb-12'>
      <span className='text-2xl text-blue-900 w-fit font-mono italic font-semibold'>ShopStore</span>
      </header>

      <main className='container'>
      <div className='flex items-center justify-between bg-gray-100 py-3 px-5 rounded-md'>
        <h1 className='text-2xl sm:text-3xl text-blue-900 font-mono  font-semibold '>Latest Products</h1>
        <Button className='w-fit bg-blue-900 hover:bg-blue-700' onClick={()=> openModal()}>ADD PRODUCT</Button>
      </div>
        <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 md:gap-4 p-2 rounded-md'>
            {renderProduct}
        </div>
        {/* -----------ADD PRODUCT MODAL---------------- */} 
        <Modal isOpen={isOpen} closeModal={closeModal} title='ADD A NEW PRODUCT'>
          <form onSubmit={onSubmitHandler}>
            {renderFormInputs} 
            <Select  selected={selected} setSelected={setSelected}/>
            <div className="flex items-center my-2 flex-wrap space-x-1">
              {renderColorCircles}
            </div>
            <ErrorMessage msg={colorError} />
            <div className="flex items-center my-2 flex-wrap gap-1">
              {renderColorName}
            </div>
            <div className='flex space-x-2'>
              <Button className=' bg-blue-900  hover:bg-blue-800'>ADD</Button>
              <Button className='bg-gray-400  hover:bg-gray-500'
              onClick={onCancel} type='button'>CANCEL</Button>
            </div>
          </form>
        </Modal>

         {/* -----------EDIT PRODUCT MODAL---------------- */} 
        <Modal isOpen={isEditOpen} closeModal={closeEditModal} title='EDIT PRODUCT'>
          <form onSubmit={onEditSubmitHandler}>
            {renderFormInputsToEdit('title','Product Title', 'title')} 
            {renderFormInputsToEdit('description','Product Description', 'description')} 
            {renderFormInputsToEdit('imageURL','Product ImageURL', 'imageURL')} 
            {renderFormInputsToEdit('price','Product Price', 'price')} 
            {/* SetSelected function need to be updated, so we grap the object and add the value, 
              the function of the component is directly has the value as an argument, not an event.target 
              so use the value directly, the function that we have to update is the product itself setProductEdit */}
            <Select selected={productEdit.category} setSelected={value=>setProductEdit({...productEdit, category:value})}/> 
            <div className="flex items-center my-2 flex-wrap space-x-2">
              {renderColorCircles}
            </div>
            <ErrorMessage msg={colorError} />
            <div className="flex items-center my-2 flex-wrap gap-1">
              {renderColorNameToEdit}
            </div>
            <div className='flex space-x-2'>
              <Button className='text-blue-900 bg-blue-800  hover:bg-blue-600'>UPDATE</Button>
              <Button className=' bg-gray-400  hover:bg-gray-500'
              onClick={onCancelEdit} type='button'>CANCEL</Button>
            </div>
          </form>
        </Modal>

        {/* -----------Remove PRODUCT MODAL---------------- */} 
        <Modal isOpen={isRemoveModalOpen} closeModal={closeRemoveModal} title='Are You Sure You Want to Remove This Product?'>
            <p>
              Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action.
            </p>
              <div className='flex space-x-2 mt-3'>
                <Button className='bg-red-800  hover:bg-red-600' onClick={onRemoveProduct}>Remove</Button>
                <Button className='bg-gray-400  hover:bg-gray-500'
                onClick={onCancelRemove} type='button'>CANCEL</Button>
              </div>
        </Modal>
      </main>  
      <Toaster />   
    </>
  )
}

export default App
