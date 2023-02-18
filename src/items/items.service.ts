import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items:Item[]=[
    { 
        id:"y5y454444",
        name:"iPhone",
        price:1000,
        description:"brand new"
    },
    { 
        id:"y5lritu004",
        name:"Mara Phone",
        price:100,
        description:"brand new"
    },
    { 
        id:"y4555555",
        name:"XTG",
        price:105,
        description:"brand new"
    },
    ];

    findAll():Item[]{
        return this.items;
    }
    findOne(id:string):Item{
        return this.items.find(item=>item.id===id);
    }
}
