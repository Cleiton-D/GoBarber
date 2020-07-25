import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { month, year, day } = request.query;

    const listProviderappointments = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointemnts = await listProviderappointments.execute({
      provider_id: user_id,
      month: Number(month),
      year: Number(year),
      day: Number(day),
    });

    return response.json(classToClass(appointemnts));
  }
}
