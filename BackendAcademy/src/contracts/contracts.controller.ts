import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { DeployContractDto, InvokeContractDto } from './dto/invoke-contract.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post('invoke')
  async invokeContract(@Body() dto: InvokeContractDto) {
    return this.contractsService.invokeContract(dto);
  }

  @Post('deploy')
  async deployContract(@Body() dto: DeployContractDto) {
    return this.contractsService.deployContract(dto);
  }

  @Get(':contractId')
  async getContractInfo(@Param('contractId') contractId: string) {
    return this.contractsService.getContractInfo(contractId);
  }

  @Get(':contractId/health')
  async getContractHealth(@Param('contractId') contractId: string) {
    return this.contractsService.getContractHealth(contractId);
  }

  @Get(':contractId/history')
  async getInvocationHistory(@Param('contractId') contractId: string) {
    return this.contractsService.getInvocationHistory(contractId);
  }

  @Get()
  async getAllDeployments() {
    return this.contractsService.getAllDeployments();
  }
}
