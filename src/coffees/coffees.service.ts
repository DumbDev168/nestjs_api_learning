import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwrek Roast',
            brand: 'Brand Brand',
            flavors: ['Chocolates', 'Vanilla']
        },
        {
            id: 2,
            name: 'Shipwrek Roast 2',
            brand: 'Brand Brand 2',
            flavors: ['Chocolates 2', 'Vanilla 2']
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(item => item.id === +id);
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return this.coffees;
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {

        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex !== -1) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
