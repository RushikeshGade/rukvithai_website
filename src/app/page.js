"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const blobs = document.querySelectorAll('.blob');
            
            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
                const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
                
                blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email.trim() !== '') {
            setIsSubmitting(true);

            setTimeout(() => {
                setShowSuccess(true);
                
                setTimeout(() => {
                    setEmail('');
                    setShowSuccess(false);
                    setIsSubmitting(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <>
            <style jsx global>{`
                h1, h2, h3, .logo, .section-title {
                    font-family: var(--font-poppins);
                }
                body, input, button {
                    font-family: var(--font-inter);
                }
            `}</style>
            
            {/* Background Elements */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <div className="container">
                {/* Header */}
                <header>
                    <div className="logo">
                        <span className="emoji">🌾</span> Krushi Parcel Seva
                    </div>
                    <div className="lang-toggle">En / मराठी</div>
                </header>

                {/* Hero Section */}
                <main className="hero">
                    <div className="hero-content">
                        <div className="badge">Coming Soon / लवकरच येत आहे</div>
                        <h1>Empowering Farmers with <span className="highlight">Direct Deliveries</span></h1>
                        <p>Genuine seeds, fertilizers, and pesticides delivered straight to your village. Join the agricultural revolution with Krushi Parcel Seva.</p>
                        
                        {!showSuccess ? (
                            <form className="notify-form" onSubmit={handleSubmit}>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Notify Me'}
                                </button>
                            </form>
                        ) : (
                            <div className="success-message">
                                Thanks! We'll notify you when we launch. 🎉
                            </div>
                        )}
                    </div>
                    
                    <div className="hero-visual">
                        <div className="glass-card main-card">
                            <div className="card-header">
                                <div className="dot-group">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mock-order">
                                    <div className="icon-box green-bg">📦</div>
                                    <div className="mock-details">
                                        <span className="title">Tomato Seeds (टोमॅटो बियाणे)</span>
                                        <span className="subtitle">Delivered to: Shirur, Pune</span>
                                    </div>
                                    <div className="status-badge delivered">Delivered</div>
                                </div>
                                <div className="mock-order">
                                    <div className="icon-box orange-bg">💰</div>
                                    <div className="mock-details">
                                        <span className="title">Khata Limit (उधारी)</span>
                                        <span className="subtitle">Available: ₹8,500</span>
                                    </div>
                                    <div className="status-badge pending">Active</div>
                                </div>
                                <div className="mock-order">
                                    <div className="icon-box blue-bg">🚚</div>
                                    <div className="mock-details">
                                        <span className="title">Delivery Status</span>
                                        <span className="subtitle">Driver: Santosh Yadav</span>
                                    </div>
                                    <div className="status-badge processing">On the way</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="floating-element el-1">
                            🌱 100% Original Products
                        </div>
                        <div className="floating-element el-2">
                            👨‍🌾 For 10,000+ Farmers
                        </div>
                    </div>
                </main>

                {/* Features Section */}
                <section className="features">
                    <h2 className="section-title">Why choose Krushi Parcel Seva?</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🌱</div>
                            <h3>Quality Assured</h3>
                            <p>Top brand seeds, fertilizers, and pesticides directly sourced for better crop yields.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💰</div>
                            <h3>Credit Khata</h3>
                            <p>Flexible credit options (उधारी सुविधा) to support farmers when they need it most.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚚</div>
                            <h3>Village Delivery</h3>
                            <p>Reliable and fast delivery network to rural and remote farming areas.</p>
                        </div>
                    </div>
                </section>

                <footer>
                    <p>&copy; 2026 Krushi Parcel Seva. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
