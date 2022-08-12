import { Module } from '@nestjs/common';
import { S3Storage } from 'src/aws/utils/S3Storage';

@Module({
  providers: [S3Storage],
  exports: [S3Storage],
})
export class S3ConfigModule {}
