import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create({
      ...createProductDto,
      price: Number(createProductDto.price),
      quantity: Number(createProductDto.quantity),
    });
    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);

    if (updateProductDto.name !== undefined) {
      product.name = updateProductDto.name;
    }
    if (updateProductDto.category !== undefined) {
      product.category = updateProductDto.category;
    }
    if (updateProductDto.price !== undefined) {
      product.price = Number(updateProductDto.price);
    }
    if (updateProductDto.quantity !== undefined) {
      product.quantity = Number(updateProductDto.quantity);
    }

    return await this.productRepository.save(product);
  }

  async remove(id: number): Promise<{ message: string; deletedProduct: Product }> {
    const product = await this.findOne(id);
    const deletedProduct = { ...product };
    await this.productRepository.delete(id);
    return {
      message: `Product with ID ${id} deleted successfully`,
      deletedProduct,
    };
  }
}
