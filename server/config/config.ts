interface Settings {
    MongoSettings: MongoSettings,
}

interface MongoSettings {
    IP: string,
    Port: number,
    User: string,
    Password: string,
}

const settings: Settings = {
    MongoSettings: {
        IP: process.env.MONGO_IP || 'mongo',
        Port: parseInt(process.env.MONGO_PORT) || 27017,
        User: process.env.MONGO_USER,
        Password: process.env.MONGO_PASSWORD,
    }
}

export default settings
