import { Controller,Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-dto.item';
import { ItemsService } from './items.service';
import {Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService:ItemsService){
    }

    @Get()
    findAll():Item[]{
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id):Item{
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body()createItemDto:CreateItemDto):string{
        return `Name:${createItemDto.name} Descriptio:${createItemDto.description}`;
    }
    
    @Delete(':id')
    delete(@Param('id')id):string{
        return `deleted ${id} successfully`;
    }

    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto,@Param('id')id):string{
        return `Updated  item ${id} -Name ${updateItemDto.name}`;
    }
}
