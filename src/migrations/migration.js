const createUserTable = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS
    users(
        id UUID PRIMARY KEY NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        phone VARCHAR(20) NULL,
        email VARCHAR UNIQUE NOT NULL,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL,
        isAdmin BOOLEAN NOT NULL default false,
        social_id UUID NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
        FOREIGN KEY (social_id) REFERENCES "project" (id) ON DELETE CASCADE
    );
`
const createProjectTable = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS
    project(
        id UUID PRIMARY KEY NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL,
        project_name VARCHAR(20) NOT NULL,
        client VARCHAR(100) NULL,
        manager VARCHAR(50) NULL,
        team VARCHAR(50) NULL,
        goal VARCHAR(50) NULL,
        info VARCHAR(50) NULL,
        content VARCHAR(1000) NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES "users" (id) ON DELETE CASCADE
        );
        `

const createSocialMediaLinksTable = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS
    socialMediaLinks(
        id UUID PRIMARY KEY NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL,
        facebook VARCHAR(50) NULL,
        instagram VARCHAR(50) NULL,
        twitter VARCHAR(50) NULL,
        FOREIGN KEY (user_id) REFERENCES "users" (id)  ON DELETE CASCADE
    );
`

const createCompanyTable = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE TABLE IF NOT EXISTS
    company(
        id UUID PRIMARY KEY NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        name VARCHAR(50) NOT NULL,
        address VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        phone VARCHAR(50) NOT NULL
    );
`

const migrate = async pool =>{
    try{
        await pool.query(createUserTable);
        await pool.query(createProjectTable);
        await pool.query(createSocialMediaLinksTable);
        await pool.query(createCompanyTable);
     return true
    }catch(error){
        throw error;
    }
}

export default migrate;
