const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

async function verifyAdmin() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        const testEmail = 'admin@vasantours.com';
        const testPassword = 'admin123';

        // Find admin
        const admin = await Admin.findOne({ email: testEmail });
        
        if (!admin) {
            console.log('❌ ADMIN NOT FOUND!\n');
            console.log('Run this command to create admin:');
            console.log('node seedAdmin.js\n');
            process.exit(1);
        }

        console.log('✅ Admin found in database\n');
        console.log('Admin Details:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Email:', admin.email);
        console.log('👤 Role:', admin.role);
        console.log('🔐 Password Hash:', admin.password.substring(0, 40) + '...');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        // Test password
        console.log('Testing password comparison...');
        const isMatch = await bcrypt.compare(testPassword, admin.password);
        
        if (isMatch) {
            console.log('✅ PASSWORD TEST: SUCCESS\n');
            console.log('🎉 Login credentials are correct!');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('Use these credentials to login:');
            console.log('Email:', testEmail);
            console.log('Password:', testPassword);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        } else {
            console.log('❌ PASSWORD TEST: FAILED\n');
            console.log('Password does not match!');
            console.log('Run: node seedAdmin.js (to recreate admin)');
        }

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

verifyAdmin();
