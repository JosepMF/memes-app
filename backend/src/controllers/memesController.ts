import {Request, Response} from 'express'

export class MemeControllers {
    public static async getMemes(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async oneMeme(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async createMeme(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async editMeme(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
    public static async deleteMeme(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({message: 'OK'})
        } catch (error) {
            return res.status(500).json({error: 'fatal internal error'});
        }
    }
}