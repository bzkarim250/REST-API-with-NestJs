import { Controller,Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-dto.item';

@Controller('items')
export class ItemsController {
    @Get()
    findAll():string{
        return "All items";
    }

    @Get(':id')
    findOne(@Param('id') id):string{
        return `Item ${id}`;
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
