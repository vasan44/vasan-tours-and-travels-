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

async function fixAdminLogin() {
    console.log('\n🔧 FIXING ADMIN LOGIN...\n');

    try {
        // Step 1: Connect to MongoDB
        console.log('1️⃣  Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('   ✅ Connected\n');

        // Step 2: Check/Create Admin
        console.log('2️⃣  Checking admin user...');
        const email = 'admin@vasantours.com';
        const plainPassword = 'admin123';

        let admin = await Admin.findOne({ email });
        
        if (admin) {
            console.log('   ⚠️  Admin exists, recreating...');
            await Admin.deleteOne({ email });
        }

        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        admin = await Admin.create({
            email: email,
            password: hashedPassword,
            role: 'admin'
        });
        console.log('   ✅ Admin created\n');

        // Step 3: Test Password
        console.log('3️⃣  Testing password...');
        const isMatch = await bcrypt.compare(plainPassword, admin.password);
        console.log('   ' + (isMatch ? '✅ Password test PASSED' : '❌ Password test FAILED') + '\n');

        // Step 4: Summary
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ ADMIN LOGIN FIXED!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Email:', email);
        console.log('🔑 Password:', plainPassword);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('🚀 Next steps:');
        console.log('   1. Start backend: node Server.js');
        console.log('   2. Go to: http://localhost:5173/admin/login');
        console.log('   3. Login with credentials above\n');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        console.log('\nCheck:');
        console.log('- MongoDB connection string in .env');
        console.log('- bcryptjs is installed: npm install bcryptjs\n');
        process.exit(1);
    }
}

fixAdminLogin();
