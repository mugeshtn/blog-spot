import  bcrypt from 'bcryptjs'; //npm i --save-dev @types/bcryptjs

/**
 * @param password 
 * @returns Hashed password
 */

export async function hashPassword(password: string){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
}


/**
 * @param password 
 * @param hashedPassword
 * @returns boolean indicating password match
 */


export async function verifyPassword(passsword: string, hashedPassword: string){
    return bcrypt.compare(passsword, hashedPassword);
}

