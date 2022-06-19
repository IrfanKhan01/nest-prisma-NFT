import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Asset } from '@prisma/client';
import { AssetsService } from './assets.service';

@Controller()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get('assets/:id')
  async getAssetById(@Param('id') id: string): Promise<Asset> {
    return this.assetsService.asset({ id: Number(id) });
  }

  @Get('assets')
  async getAssets(): Promise<Asset[]> {
    return this.assetsService.assets({});
  }

  @Post('assets')
  async createAsset(
    @Body() asset: { title: string; content: string; authorId: number },
  ): Promise<Asset> {
    return this.assetsService.createAsset(asset);
  }

  @Put('assets/:id')
  async updateAsset(
    @Param('id') id: string,
    @Body() asset: { tite: string; content: string; authorId: number },
  ): Promise<Asset> {
    return this.assetsService.updateAsset({
      where: { id: Number(id) },
      data: asset,
    });
  }

  @Delete('assets/:id')
  async deleteAsset(@Param('id') id: string): Promise<Asset> {
    return this.assetsService.deleteAsset({ id: Number(id) });
  }
}
