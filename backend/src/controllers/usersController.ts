import { Request, Response } from "express";
import { encryptPassword } from "../helpers/encryptPassword";
import jwt from "jsonwebtoken";

import { connect } from "../database";
import { User } from "../interfaces/User";
import { settings } from "../config";
import { Login } from "interfaces/Login";
import { validatePasswords } from "../helpers/validatePasswords";

export class UserControllers {
  public static async login(req: Request, res: Response): Promise<Response> {
    try {
      // data from frontend
      const newLogin: Login = req.body;
      
      // creating conexion with database
      const conn = await connect();

      // the query for find the user
      const query = await conn.query("SELECT * FROM users WHERE EMAIL=?", [
        newLogin.EMAIL,
      ]);
      const data: any = await query[0];

      const password: string = data[0].PASSWORD;

      // create token
      const token: string = await jwt.sign(
        { _id: query[0] },
        settings.tokenSettings.secret
      );

      // verifay passwords
      if (await validatePasswords(newLogin.PASSWORD, password)) {
        const user: any = query[0];
        return res.header("auth-token", token)
          .status(200)
          .json({ auth: true, user: user[0], token })
      } else {
        return res.status(400).json({ error: "the passwor are incorrect" });
      }
    } catch (error) {
      console.error(error);

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
      const query = await conn.query("SELECT * FROM users WHERE EMAIL=?", [
        newUser.EMAIL,
      ]);

      // creating token
      const token: string = await jwt.sign(
        { _id: query[0] },
        settings.tokenSettings.secret
      );

      // response to client
      const data:any = query[0];

      return res.status(200).header("auth-token", token).json({
        auth: true,
        user: data[0],
        token,
      });
    } catch (error) {
      console.error(error);
      
      // detecting errors
      return res.status(500).json({ error: "the user is exist" });
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
