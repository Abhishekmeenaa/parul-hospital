import { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSignInAlt, FaUserPlus, FaHome, FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    fullName: ''
  });
  const Navigate = useNavigate()

  const toggleAuthMode = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      const user = users.find(u => 
        (u.username === formData.username || u.email === formData.username) && 
        u.password === formData.password
      );
      
      if (user) {
        setCurrentUser(user);
        alert(`Welcome back, ${user.fullName}!`);
        Navigate("/")
      } else {
        alert('Invalid credentials!');
      }
    } else {
      // Register logic
      const newUser = {
        ...formData,
        id: Date.now()
      };
      setUsers([...users, newUser]);
      alert('Registration successful! Please login.');

      setIsLogin(true);
      setFormData({
        username: '',
        email: '',
        password: '',
        phone: '',
        fullName: ''
      });
      
    }
  };

  if (currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-6">
              <FaUser className="text-white text-4xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h2>
            <p className="text-gray-600 mb-6">{currentUser.fullName}</p>
            
            <div className="space-y-4 text-left mb-8">
              <div className="flex items-center">
                <MdEmail className="text-blue-500 mr-3" />
                <span>{currentUser.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-500 mr-3" />
                <span>{currentUser.phone}</span>
              </div>
              <div className="flex items-center">
                <FaIdCard className="text-blue-500 mr-3" />
                <span>@{currentUser.username}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentUser(null)}
              className="w-full bg-[#00A297] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl flex">
    {/* Side Image */}
    <div className="hidden md:block md:w-1/2 bg-[#00A297] relative">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img 
          src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
          alt="Auth Illustration" 
          className="w-full h-auto max-h-96 object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h2>
        <p className="opacity-90">
          {isLogin ? 'Login to access your account and continue your journey.' : 'Create an account to get started with our services.'}
        </p>
      </div>
    </div>
    
    {/* Form Section */}
    <div className="w-full md:w-1/2 p-16 flex flex-col justify-center">
      <div className="md:hidden mb-6 bg-[#00A297] p-4 rounded-lg text-white text-center">
        <h1 className="text-2xl font-bold">{isLogin ? 'Welcome Back!' : 'Create Account'}</h1>
        <p className="opacity-90">{isLogin ? 'Login to continue' : 'Join us today'}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full">
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
        )}
        
        {!isLogin && (
          <div className="mb-4 ">
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@mail.com"
                required
              />
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{isLogin ? 'Username or Email' : 'Username'}</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={isLogin ? 'username or email' : 'coolusername'}
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              required
              minLength="6"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
              ) : (
                <FaEye className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        </div>
        
        {!isLogin && (
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 9876543210"
              />
            </div>
          </div>
        )}
        
        <button
          type="submit"
          className="w-full bg-[#00A297] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all mb-4 flex items-center justify-center"
        >
          {isLogin ? (
            <>
              <FaSignInAlt className="mr-2" />
              Login
            </>
          ) : (
            <>
              <FaUserPlus className="mr-2" />
              Register
            </>
          )}
        </button>
        
        <div className="text-center">
          <button
            type="button"
            onClick={toggleAuthMode}
            className="text-black   font-medium"
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;