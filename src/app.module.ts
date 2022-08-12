import { Module } from '@nestjs/common';
import { AwsModule } from './aws/aws.module';
import { S3ConfigModule } from './aws/providers/s3/S3Config.module';

@Module({
  imports: [AwsModule, S3ConfigModule],
})
export class AppModule {}
