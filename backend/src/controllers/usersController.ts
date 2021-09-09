import {Request, Response} from 'express'

export class UserControllers {
    public static async login(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async register(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async logout(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async changePassword(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async editAccount(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async deleteAccount(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
}