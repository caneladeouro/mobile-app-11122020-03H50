import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import User from "../Models/User";
import UserView from "../Views/user_view";

export default {
  async index(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return res.json(UserView.renderMany(users));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail(id);

    return res.json(UserView.render(user));
  },

  async create(req: Request, res: Response) {
    const { nm_user, nm_email, ds_password } = req.body;

    const userRepository = getRepository(User);

    const data = {
      nm_user,
      nm_email,
      ds_password,
    };

    console.log(data);

    const schema = Yup.object().shape({
      nm_user: Yup.string().required(),
      nm_email: Yup.string().required(),
      ds_password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = userRepository.create(data);
    await userRepository.save(user);

    return res.status(201).json(user);
  },
};
