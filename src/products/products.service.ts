import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private readonly filePath = path.resolve(process.cwd(), 'src/products.json');

  private getProductsFromFile(): any[] {
    const fileData = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileData);
  }

  findAll() {
    return this.getProductsFromFile();
  }

  findOne(id: string) {
    const products = this.getProductsFromFile();
    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }
}