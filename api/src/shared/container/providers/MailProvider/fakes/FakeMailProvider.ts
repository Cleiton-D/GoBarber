import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messges: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messges.push(message);
  }
}
