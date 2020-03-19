import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, PrismaClientOptions } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient<PrismaClientOptions> implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super({ log : ['query']})
  }

  async onModuleInit() {
    await this.connect();
  }

  async onModuleDestroy() {
    await this.disconnect();
  }
}