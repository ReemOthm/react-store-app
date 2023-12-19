
export const productValidation = (product : {title: string, description:string, imageURL:string, price:string}) => {

    const error : {title: string, description:string, imageURL:string, price:string}= {
        title: '',
        description: '',
        imageURL : '',
        price: '',
    }
    
    const validURL = /^(ftp|http|https):\/\/[^"]+$/.test(product.imageURL);

    if(!product.title.trim() || product.title.length < 8 || product.title.length > 80){
        error.title = 'Product Title must be between 8 to 80 character';
    }
    if(!product.description.trim() || product.description.length < 10 || product.description.length > 900){
        error.description = 'Product Description must be between 10 to 900 character';
    }
    if(!product.imageURL.trim() || !validURL){
        error.imageURL = 'Valid Image URL is Required';
    }    
    if(!product.price.trim() || isNaN(Number(product.price))){
        error.price = 'Valid Price is Required';
    }   

    return error;
}