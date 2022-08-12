import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { parse } from 'path';

@Injectable()
export class S3Storage {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_S3_REGION,
    });
  }

  async saveFile(file: Express.Multer.File): Promise<void> {
    this.client
      .putObject({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: file.fieldname ? file.fieldname : parse(file.originalname).name,
        ACL: 'public-read',
        Body: file.buffer,
        ContentType: file.mimetype,
      })
      .promise();
  }
}
