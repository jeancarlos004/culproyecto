import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return `Estamos probando el metodo que  Get para clients..... Aqui tenemos que devolver todos los clientes `;
  }

  findOne(id: number) {
    return `Este metodo Get + el parametro 100 #${id} devolvera un cliente con codigo # 100`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
