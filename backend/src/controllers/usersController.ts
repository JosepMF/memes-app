import { Request, Response } from "express";
import { encryptPassword } from "../helpers/encryptPassword";
import jwt from "jsonwebtoken";

import { connect } from "../database";
import { User } from "../interfaces/User";
import { settings } from "../config";

export class UserControllers {
  public static async login(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
  public static async register(req: Request, res: Response): Promise<Response> {
    try {
      // creating a object for storag the user credentials in the ram memory
      const newUser: User = req.body;

      // encrypt password of the user
      newUser.PASSWORD = await encryptPassword(newUser.PASSWORD);

      // query for create user
      const conn = await connect();
      await conn.query("INSERT INTO users SET ?", [newUser]);

      // search user created
      const response = await conn.query("SELECT * FROM users WHERE EMAIL=?", [
        newUser.EMAIL,
      ]);

      // creating token
      const token: string = await jwt.sign({ _id: response[0] }, settings.tokenSettings.secret);

      // response to client
      return res
        .status(200)
        .header('auth-token', token)
        .json({
          message: "user was created successfully",
          user: response[0],
          token
        });
    } catch (error) {
      // detecting errors
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
  public static async logout(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
  public static async changePassword(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
  public static async editAccount(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
  public static async deleteAccount(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      return res.status(200).json({ message: "OK" });
    } catch (error) {
      return res.status(500).json({ error: "fatal internal error" });
    }
  }
}
