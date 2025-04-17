import React, { useState, useEffect } from 'react';
import profile1 from '../assets/profile-images/profile1.svg';
import profile2 from '../assets/profile-images/profile2.svg';
import profile3 from '../assets/profile-images/profile3.svg';
import profile4 from '../assets/profile-images/profile4.svg';
// Removed hero-styles.css import

const Homepage = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [loanTerm, setLoanTerm] = useState(12); // Default to 12 months
  const [purpose, setPurpose] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [interestRate] = useState(9.5); // Fixed interest rate for example

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm, interestRate]);

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setLoanAmount(isNaN(value) ? 0 : value);
  };

  const handleTermChange = (e) => {
    setLoanTerm(parseInt(e.target.value, 10));
  };

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const calculateLoan = () => {
    if (loanAmount > 0 && loanTerm > 0) {
      // Simple interest calculation for demonstration
      // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
      // P = Principal loan amount
      // i = Monthly interest rate
      // n = Loan term in months
      const monthlyRate = interestRate / 100 / 12;
      const principal = loanAmount;
      const numberOfPayments = loanTerm;

      const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
      const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
      const emi = denominator === 0 ? principal / numberOfPayments : numerator / denominator;

      setMonthlyPayment(emi.toFixed(2));
    } else {
      setMonthlyPayment(0);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);
  };

  return (
    <>
      {/* Dark Theme Hero Section */}
      <div className="relative min-h-screen overflow-hidden  rounded-lg px-4">
        {/* Subtle background pattern for dark theme */}
        <div className="absolute inset-0 z-0  opacity-10 bg-gradient-to-br from-primary/20 to-secondary/20 grid-background\"></div>

        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-screen">
          {/* Left content section - Dark theme optimized */}
          <div className="w-full lg:w-1/2 text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full mb-6 shadow-md backdrop-blur-sm border border-primary/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fast & Easy Approval</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-base-content" style={{ lineHeight: 1.15 }}>
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">Financial Potential</span>
            </h1>

            <p className="text-lg mb-8 text-base-content/90 max-w-xl">
              Get instant access to funds with our streamlined digital loan process. Secure, transparent, and designed for your growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300 ease-in-out border-primary/50 glow-sm">
                Apply Now
              </button>
              <button className="btn btn-outline btn-lg hover:scale-105 transition-all transform duration-300 ease-in-out border-2 border-base-content/30 text-base-content hover:bg-base-content/10 hover:border-base-content/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[
                  { id: 1, img: profile1 },
                  { id: 2, img: profile2 },
                  { id: 3, img: profile3 },
                  { id: 4, img: profile4 }
                ].map((profile) => (
                  <div key={profile.id} className="avatar ring-2 ring-primary/70 ring-offset-2 ring-offset-base-300 rounded-full shadow-lg">
                    <div className="rounded-full w-12 h-12 overflow-hidden border border-base-content/10">
                      <img src={profile.img} alt={`Profile ${profile.id}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-base-content">Trusted by 10,000+ customers</div>
                <div className="text-sm text-base-content/70">Join our satisfied customers today</div>
              </div>
            </div>
          </div>

          {/* Right form section - Dark theme optimized */}
          <div className="w-full lg:w-5/12">
            <div className="card bg-base-100/30 shadow-2xl backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/30 transition-all duration-300">
              <div className="card-body p-8">
                <h2 className="card-title text-2xl font-bold mb-6 text-base-content">Quick Loan Calculator</h2>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Loan Amount</span>
                    <span className="bg-base-300 pl-0 px-4 rounded-l-lg text-base-content/70">₹</span>

                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      placeholder="e.g., 25000"
                      className="input w-full focus:input-primary bg-base-200/80 rounded-r-lg border-primary/30 focus:border-primary"
                      value={loanAmount}
                      onChange={handleAmountChange}
                      min="1000"
                      step="1000"
                    />
                  </div>
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text font-medium">Loan Term (Months)</span>
                  </label>
                  <select
                    className="select w-full focus:select-primary bg-base-200/80 border-primary/30 focus:border-primary"
                    value={loanTerm}
                    onChange={handleTermChange}
                  >
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>12 months</option>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                  </select>
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text font-medium">Purpose</span>
                  </label>
                  <select
                    className="select w-full focus:select-primary bg-base-200/80 border-primary/30 focus:border-primary"
                    value={purpose}
                    onChange={handlePurposeChange}
                  >
                    <option value="" disabled>Select purpose</option>
                    <option value="Personal Use">Personal Use</option>
                    <option value="Education">Education</option>
                    <option value="Business">Business</option>
                    <option value="Medical">Medical</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="bg-base-300/30 p-4 rounded-lg mb-6 border border-primary/20 shadow-inner">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-base-content/80 font-medium">Est. Monthly Payment</span>
                    <span className="font-bold text-white text-lg">{formatCurrency(monthlyPayment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-base-content/80 font-medium">Interest Rate (APR)</span>
                    <span className="font-bold text-white-200">{interestRate}%</span>
                  </div>
                </div>

                <button className="btn btn-primary w-full btn-lg hover:shadow-xl transform hover:scale-105 transition duration-300 border-primary/50 glow-sm">
                  Check Eligibility
                </button>

                <div className="text-center mt-4 text-sm text-base-content/70">
                  <span>Instant calculation. Final terms may vary.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating features - Adjusted Styling */}

      </div>

      {/* Feature Cards Section - Updated Styling */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-base-content mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-white shadow-md border border-base-300 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6 text-gray-800">
              <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                {/* Placeholder for Icon */}
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-base-content text-gray-800">Quick Approval</h2>
              <p className="text-base-content/70 text-gray-800">Get your loan approved in minutes with our hassle-free process.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6">
              <div className="p-4 bg-purple-100 rounded-full mb-4 inline-block">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-gray-800">Flexible Repayment</h2>
              <p className="text-gray-600">Choose repayment plans that suit your needs and budget.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-white shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6">
              <div className="p-4 bg-teal-100 rounded-full mb-4 inline-block">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-gray-800">Secure & Trusted</h2>
              <p className="text-gray-600">Your data and transactions are protected with top-notch security.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card bg-white shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6">
              <div className="p-4 bg-orange-100 rounded-full mb-4 inline-block">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-gray-800">24/7 Customer Support</h2>
              <p className="text-gray-600">Our support team is available around the clock to assist you.</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card bg-white shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6">
              <div className="p-4 bg-green-100 rounded-full mb-4 inline-block">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-gray-800">Paperless Process</h2>
              <p className="text-gray-600">Enjoy a fully digital, eco-friendly loan application experience.</p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card bg-white shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="card-body items-center text-center p-6">
              <div className="p-4 bg-indigo-100 rounded-full mb-4 inline-block">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h2 className="card-title text-xl font-semibold text-gray-800">Personalized Offers</h2>
              <p className="text-gray-600">Receive loan offers tailored to your unique financial profile.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;