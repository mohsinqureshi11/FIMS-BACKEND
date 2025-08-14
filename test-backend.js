// Simple test script to verify backend endpoints
import axios from 'axios';

const BASE_URL = 'https://fims-backend-b930ziv5a-mohsin-qureshis-projects.vercel.app';

async function testBackend() {
    console.log('🧪 Testing Backend Endpoints...\n');

    try {
        // Test health check
        console.log('1. Testing Health Check...');
        const healthResponse = await axios.get(`${BASE_URL}/`);
        console.log('✅ Health Check:', healthResponse.data);
        console.log('');

        // Test CORS with test endpoint
        console.log('2. Testing CORS...');
        const testResponse = await axios.get(`${BASE_URL}/test`);
        console.log('✅ CORS Test:', testResponse.data);
        console.log('');

        // Test get all officers
        console.log('3. Testing Get All Officers...');
        const officersResponse = await axios.get(`${BASE_URL}/officerapi/getAllOfficers`);
        console.log('✅ Get Officers:', officersResponse.data);
        console.log('');

        // Test create officer
        console.log('4. Testing Create Officer...');
        const testOfficer = {
            userName: "Test Officer",
            email: "test@example.com",
            gander: "Male",
            age: 30,
            phoneNumber: 1234567890,
            desigination: "Inspector"
        };
        
        const createResponse = await axios.post(`${BASE_URL}/createOfficer/officerRegister`, testOfficer);
        console.log('✅ Create Officer:', createResponse.data);
        console.log('');

        console.log('🎉 All tests passed! Backend is working correctly.');

    } catch (error) {
        console.error('❌ Test failed:', error.response?.data || error.message);
        console.error('Status:', error.response?.status);
        console.error('Headers:', error.response?.headers);
    }
}

testBackend();
