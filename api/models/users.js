module.exports = {
    users_profiles: {
        schema: {
            IDUser_profile: { type: "int", ai: true },
            User_profile: { type: "string", length: 30 },
            Created: { type: "timestamp", default: "CURRENT_TIMESTAMP" },
            Updated: { type: "timestamp", default: "CURRENT_TIMESTAMP", dbControl: true, onUpdate: true, out: false }
        },
        globalWhere: "",
        globalOrder: "",
        relations: {},
        indexes: { keys: "IDUser_profile", unique: "IDUser" },
    },

    users: {
        schema: {
            IDUser: { type: "int", ai: true },
            IDUser_profile: { type: "int" },
            Email: { type: "string", length: 30 },
            Username: { type: "string", length: 30 },
            Password: { type: "string", length: 32, out: false, onInput: "md5" },
            Name: { type: "string", length: 30 },
            Created: { type: "timestamp", default: "CURRENT_TIMESTAMP", dbControl: true, out: false },
            Updated: { type: "timestamp", default: "CURRENT_TIMESTAMP", dbControl: true, onUpdate: true, out: false },
            IDPlatform : { type: "int", out: false },
        },
        indexes: { keys: "IDUser", unique: "IDUser" },
        globalWhere: "",
        globalOrder: "users.Name ASC",
        relations: { IDUser_profile: "users_profiles.IDUser_Profile CASCATE" }
    }
}