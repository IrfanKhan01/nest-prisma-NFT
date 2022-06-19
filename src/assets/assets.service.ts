import { Injectable } from '@nestjs/common';
import { Prisma, Asset } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  async asset(
    assetwhereUniqueInput: Prisma.AssetWhereUniqueInput,
  ): Promise<Asset | null> {
    return this.prisma.asset.findUnique({
      where: assetwhereUniqueInput,
    });
  }

  async assets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AssetWhereUniqueInput;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput;
  }): Promise<Asset[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.asset.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAsset(data: Prisma.AssetCreateInput): Promise<Asset> {
    return this.prisma.asset.create({
      data,
    });
  }

  async updateAsset(params: {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.AssetUpdateInput;
  }): Promise<Asset | null> {
    const { where, data } = params;
    return this.prisma.asset.update({
      where,
      data,
    });
  }

  async deleteAsset(
    assetWhereUniqueInput: Prisma.AssetWhereUniqueInput,
  ): Promise<Asset | null> {
    return this.prisma.asset.delete({
      where: assetWhereUniqueInput,
    });
  }
}
