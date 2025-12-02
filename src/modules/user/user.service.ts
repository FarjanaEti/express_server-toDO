//all the business logic here

import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const createUserDB=async(payload :Record<string, unknown>)=>{
  const {name,email, password}=payload;

  const hashedPass=await bcrypt.hash(password as string, 10); 

const result = await pool.query(
  `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *`,
   [name, email, hashedPass]
  );
  return result;
}

const getUserDB=async()=>{
  const result=await pool.query(`SELECT * FROM users`)
  return result;
}

const getSingleUserDB=async(id:string)=>{
  const result=await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
   return result
}

const updateUserDB = async (name: string, email: string, id: string) => {
  const result = await pool.query(
    `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
    [name, email, id]
  );

  return result;
};

const deleteUserDB = async (id: string) => {
  const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

  return result;
};

export const userServices={
     createUserDB,
     getUserDB,
     getSingleUserDB,
     updateUserDB,
     deleteUserDB                    
}