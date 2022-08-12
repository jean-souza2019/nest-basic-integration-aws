import { BadRequestException, Injectable } from '@nestjs/common';
import { S3Storage } from './utils/S3Storage';

@Injectable()
export class AwsService {
  constructor(private readonly s3: S3Storage) {}

  async uploadFiles(files: Express.Multer.File[]): Promise<any> {
    if (!files || !files.length) {
      throw new BadRequestException('Format file is not suported');
    }

    for (const file of files) {
      console.log('file', file);

      const returnAws = await this.s3.saveFile(file);
      console.log('returnAws', returnAws);
    }

    return 'This action upload this file';
  }
}
