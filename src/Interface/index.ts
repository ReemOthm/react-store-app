export type ProductNameTypes =  'title' | 'description' | 'imageURL' | 'price' ;

export interface IProduct {
    id?: string | undefined,
    title: string,
    description: string,
    imageURL: string,
    price: string,
    colors: string[],
    category :{
        name: string,
        imageURL : string
    }
}

export interface IFormInput {
    id: string,
    name: ProductNameTypes,  //to control the data that pass from inputs
    label: string,
    type: string,
}

export interface ICategory {
    id: string,
    name: string,
    imageURL: string
}