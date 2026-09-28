const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

// Admin Schema (inline for simplicity)
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

async function seedAdmin() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB\n');

        const email = 'admin@vasantours.com';
        const plainPassword = 'admin123';

        // Check if admin exists
        let admin = await Admin.findOne({ email });
        
        if (admin) {
            console.log('⚠️  Admin already exists!');
            console.log('Deleting old admin and creating new one...\n');
            await Admin.deleteOne({ email });
        }

        // Hash password directly
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        
        // Create admin with hashed password
        admin = await Admin.create({
            email: email,
            password: hashedPassword,
            role: 'admin'
        });

        console.log('✅ ADMIN CREATED SUCCESSFULLY!\n');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Email:', email);
        console.log('🔑 Password:', plainPassword);
        console.log('👤 Role:', admin.role);
        console.log('🔐 Password Hash:', hashedPassword.substring(0, 30) + '...');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        // Test password comparison
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        console.log('🧪 Password Test:', isMatch ? '✅ PASS' : '❌ FAIL');
        
        if (isMatch) {
            console.log('\n🎉 Login should work now!');
            console.log('Go to: http://localhost:5173/admin/login');
        }

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

seedAdmin();
