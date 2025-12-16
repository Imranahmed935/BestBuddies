import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    cloudinary: {
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    },
    // jwt: {
    //     jwt_secret: process.env.JWT_SECRET,
    //     expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
    //     refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    //     refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN, 
    // },
    // stripeSecretKey:process.env.STRIPE_SECRET_KEY,

    // admin:{
    //     super_admin_email:process.env.SUPER_ADMIN_EMAIL,
    //     super_admin_pass:process.env.SUPER_ADMIN_PASS
    // },
    // frontend_url:process.env.FRONTEND_URL
}