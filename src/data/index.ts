import {v4 as uuidv4 } from 'uuid';
import { ICategory, IFormInput, IProduct } from "../Interface";

export const productInformation: IProduct[]= [
    {
        id: uuidv4(),
        title: 'NoteBook',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '40',
        colors: [],
        category :{
            name: 'NoteBooks',
            imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    },
    {
        id: uuidv4(),
        title: 'To-Do List',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/6192131/pexels-photo-6192131.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '23',
        colors: ['#9f9b9b','#574c4c'],
        category :{
            name: 'To-Do-List',
            imageURL : 'https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    },
    {
        id: uuidv4(),
        title: 'To-Do notes',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '30',
        colors: ['#937676','#999466','#cfc45d','#af5252'],
        category :{
            name: 'To-Do-List',
            imageURL : 'https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
    {
        id: uuidv4(),
        title: 'Blue Pens',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '18',
        colors: ['#d71e1e','#000000','#219b21'],
        category :{
            name: 'Pens',
            imageURL : 'https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
    {
        id: uuidv4(),
        title: 'Pineapple NoteBook',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/947870/pexels-photo-947870.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '12',
        colors: ['#ff0076','#ac5478','#356787'],
        category :{
            name: 'NoteBooks',
            imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
    {
        id: uuidv4(),
        title: 'Plans NoteBook',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '60',
        colors: ['#c192a8','#ac5478','#356787','#cf8d2a'],
        category :{
            name: 'NoteBooks',
            imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
    {
        id: uuidv4(),
        title: 'BlackWhite NoteBook',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/163166/coffee-envelopes-work-desk-notebook-163166.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '42',
        colors: ['#696262','#ac5478','#356787'],
        category :{
            name: 'NoteBooks',
            imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
    {
        id: uuidv4(),
        title: 'Blue Pens',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dolor ut? Cum velit dolore dolores quidem animi beatae deleniti enim eveniet aperiam, exercitationem atque nam? Optio eveniet cupiditate porro laborum.',
        imageURL : 'https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '14',
        colors: ['#d71e1e','#000000','#219b21'],
        category :{
            name: 'Pens',
            imageURL : 'https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=600',
        }
    },
];

export const formInputList: IFormInput[] = [
    {
        id: 'titile',
        name: 'title',
        label: 'Product Titile',
        type: 'text',
    },
    {
        id: 'description',
        name: 'description',
        label: 'Product description',
        type: 'text',
    },
    {
        id: 'image',
        name: 'imageURL',
        label: 'Product Image URL',
        type: 'text',
    },
    {
        id: 'price',
        name: 'price',
        label: 'Product Price',
        type: 'text',
    }
];

export const colors: string[] = [
    '#ff0076',
    '#ac5478',
    '#356787',
    '#ab5797',
    '#652097',
    '#246790',
    '#cfc45d',
    '#af5252',
    '#219b21',
    '#999466'
];

export const categories: ICategory[] = [
    {
        id: uuidv4(),
        name: 'NoteBooks',
        imageURL : 'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: uuidv4(),
        name: 'To-Do-List',
        imageURL: 'https://images.pexels.com/photos/6192131/pexels-photo-6192131.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: uuidv4(),
        name: 'pens',
        imageURL: 'https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];