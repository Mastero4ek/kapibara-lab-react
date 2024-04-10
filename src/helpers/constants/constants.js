import lab1 from '@assets/image/gallery/lab1.png';
import lab2 from '@assets/image/gallery/lab2.png';
import lab3 from '@assets/image/gallery/lab3.png';
import lab4 from '@assets/image/gallery/lab4.png';
import lab5 from '@assets/image/gallery/lab5.png';
import lab6 from '@assets/image/gallery/lab6.png';
import lab7 from '@assets/image/gallery/lab7.png';

export const API_URL = `${process.env.REACT_APP_API_URL}api`;

export const navbarList = [
    {
        id: 0,
        idElement: 'laboratory',
        name: 'Лаборатория'
    },
    {
        id: 1,
        idElement: 'gallery',
        name: 'Галерея'
    },
    {
        id: 2,
        idElement: 'form',
        name: 'Оставить заявку'
    }
];

export const galleryList = [
    {
        id: 0,
        src: lab1
    },
    {
        id: 1,
        src: lab2
    },
    {
        id: 2,
        src: lab3
    },
    {
        id: 3,
        src: lab4
    },
    {
        id: 4,
        src: lab5
    },
    {
        id: 5,
        src: lab6
    },
    {
        id: 6,
        src: lab7
    },
];