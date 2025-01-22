const db = require('../config/database');

class Setting {
    static async findByKey(key) {
        const [rows] = await db.execute(
            'SELECT * FROM settings WHERE setting_key = ?',
            [key]
        );
        return rows[0];
    }

    static async getAll() {
        const [rows] = await db.execute(
            'SELECT * FROM settings ORDER BY setting_key'
        );
        return rows;
    }

    static async updateOrCreate(key, value, type = 'text', description = null) {
        const setting = await this.findByKey(key);
        
        if (setting) {
            await db.execute(
                `UPDATE settings SET 
                    setting_value = ?,
                    setting_type = ?,
                    description = ?,
                    updated_at = NOW()
                WHERE setting_key = ?`,
                [value, type, description, key]
            );
        } else {
            await db.execute(
                `INSERT INTO settings (
                    setting_key, setting_value, setting_type,
                    description, created_at
                ) VALUES (?, ?, ?, ?, NOW())`,
                [key, value, type, description]
            );
        }
    }

    static async delete(key) {
        await db.execute(
            'DELETE FROM settings WHERE setting_key = ?',
            [key]
        );
    }

    static async bulkUpdate(settings) {
        for (const setting of settings) {
            await this.updateOrCreate(
                setting.key,
                setting.value,
                setting.type,
                setting.description
            );
        }
    }

    // Helper method to get a setting value with type conversion
    static async getValue(key, defaultValue = null) {
        const setting = await this.findByKey(key);
        if (!setting) return defaultValue;

        let value = setting.setting_value;
        switch (setting.setting_type) {
            case 'number':
                return parseFloat(value);
            case 'boolean':
                return value === 'true';
            case 'json':
                try {
                    return JSON.parse(value);
                } catch (e) {
                    return defaultValue;
                }
            default:
                return value;
        }
    }
}

module.exports = Setting; 