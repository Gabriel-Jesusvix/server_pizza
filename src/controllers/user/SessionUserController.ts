import { Request, Response } from "express";
import { SessionsService } from "../../services/user/SessionsService";

export class SessionUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const sessionsAuthService = new SessionsService();

    const auth = await sessionsAuthService.execute({ email, password });

    return response.json(auth);
  }
}
