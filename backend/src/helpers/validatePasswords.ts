import bcrypt from 'bcryptjs'

export async function validatePasswords(passwordsI: string, passwordO: string): Promise<boolean> {
    return await bcrypt.compare(passwordsI, passwordO)
}