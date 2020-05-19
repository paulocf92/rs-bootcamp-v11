import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        day,
        month,
        year,
        provider_id,
      },
    );

    // await this.cacheProvider.save('asd', 'asd');
    // const cacheData = await this.cacheProvider.recover('asd');
    // console.log(cacheData);

    return appointments;
  }
}

export default ListProviderAppointmentsService;
