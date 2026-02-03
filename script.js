<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rondel Into - Portfolio</title>
    
    <!-- External CSS Files -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Your Custom CSS - THIS IS THE MOST IMPORTANT FIX -->
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <!-- Header & Navigation -->
    <header class="header">
        <nav class="nav-container">
            <div class="logo">RI</div>
            
            <!-- Desktop Navigation -->
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            
            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    </header>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
        <button class="close-menu-btn">
            <i class="fas fa-times"></i>
        </button>
        <ul>
            <li><a href="#home" class="mobile-nav-link">Home</a></li>
            <li><a href="#about" class="mobile-nav-link">About</a></li>
            <li><a href="#skills" class="mobile-nav-link">Skills</a></li>
            <li><a href="#projects" class="mobile-nav-link">Projects</a></li>
            <li><a href="#contact" class="mobile-nav-link">Contact</a></li>
        </ul>
    </div>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="hero-content">
                <div class="hero-image-container">
                    <!-- Fixed image path -->
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                         alt="Rondel Into" class="profile-image">
                    <div class="profile-frame"></div>
                </div>
                <p class="hero-subtitle">Hello, I'm</p>
                <h1 class="hero-title">Rondel Into</h1>
                <h2 class="hero-role">IT Student & Beginner Developer</h2>
                <p class="hero-description">
                    Passionate about creating innovative solutions through code.<br>
                    Currently pursuing my degree in Information Technology while<br>
                    building projects and learning new technologies every day.
                </p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#" class="btn btn-secondary">Download CV</a>
                </div>
                <div class="social-links">
                    <a href="https://github.com" class="social-link" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" class="social-link" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:r.into.554432@umindanao.edu.ph" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="section-divider"></div>
            
            <div class="about-grid">
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Education</h3>
                    <p>Currently pursuing Bachelor's degree in Information Technology at University of Mindanao. Expected graduation: 2026</p>
                </div>
                
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Development</h3>
                    <p>Building web applications with modern technologies. Focused on creating user-friendly interfaces and efficient backend solutions.</p>
                </div>
                
                <div class="about-card">
                    <div class="about-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3>Learning</h3>
                    <p>Continuously expanding my skillset through online courses, projects, and collaboration with peers. Always eager to learn new technologies.</p>
                </div>
            </div>
            
            <div class="about-details">
                <div class="about-text">
                    <h3>My Journey</h3>
                    <p>As an IT student passionate about software development, I've been actively working on projects that solve real-world problems. I believe in the power of technology to create positive change and enjoy the process of turning ideas into functional applications.</p>
                    <p>When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or learning about the latest tech trends.</p>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
                         alt="Developer workspace" class="workspace-image">
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
        <div class="container">
            <h2 class="section-title">Skills & Technologies</h2>
            <div class="section-divider"></div>
            
            <div class="skills-container">
                <div class="skills-left">
                    <h3 class="skills-subtitle">Proficiency Levels</h3>
                    <div class="skills-list">
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">HTML/CSS</span>
                                <span class="skill-percent">85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%;"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">JavaScript</span>
                                <span class="skill-percent">75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%;"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Python</span>
                                <span class="skill-percent">70%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 70%;"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Java</span>
                                <span class="skill-percent">60%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 60%;"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">SQL</span>
                                <span class="skill-percent">65%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 65%;"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Git/GitHub</span>
                                <span class="skill-percent">75%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 75%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-right">
                    <h3 class="skills-subtitle">Technologies</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Java</span>
                        <span class="tech-tag">MySQL</span>
                        <span class="tech-tag">Git</span>
                        <span class="tech-tag">VS Code</span>
                        <span class="tech-tag">Figma</span>
                        <span class="tech-tag">Node.js</span>
                    </div>
                    
                    <div class="learning-box">
                        <h4>Currently Learning</h4>
                        <div class="learning-list">
                            <span class="learning-item">HTML</span>
                            <span class="learning-item">Node.js</span>
                            <span class="learning-item">CSS</span>
                            <span class="learning-item">Python</span>
                        </div>
                    </div>
                    
                    <div class="tech-stack-image">
                        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80" 
                             alt="Technology stack" class="tech-image">
                    </div>
                </div>
            </div>
        </div>
    </section>

   <!-- Projects Section -->
 <section id="projects" class="projects-section">
    <div class="container">
        <h2 class="section-title">My Projects</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
            Here are some of my recent projects that showcase my skills and learning journey as a developer.
        </p>
        
        <div class="projects-grid">
            <!-- Project 1 - Login Interface -->
            <div class="project-card">
                <div class="project-image">
                    <img src="https://media.giphy.com/media/7P8lA58Cg8cOzWi8db/giphy.gif" 
                         alt="Login Interface">
                    <div class="project-overlay">
                        <h4>Login Interface</h4>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3>Login Interface</h3>
                    </div>
                    <div class="project-description">
                        <p>A secure user authentication interface with login, registration, and responsive design using modern web technologies.</p>
                    </div>
                    <div class="project-tech">
                        <span class="tech-badge">HTML</span>
                        <span class="tech-badge">CSS</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">Responsive</span>
                    </div>
                    <div class="project-buttons">
                        <a href="https://github.com/RondelInto/Login-Interface-" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-code force-new-tab">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                        <a href="https://rondelinto.github.io/Login-Interface-/" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-demo force-new-tab">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Project 2 - Biography -->
            <div class="project-card">
                <div class="project-image">
                    <img src="https://media.giphy.com/media/l3vRlT2k2L35Cnn5C/giphy.gif" 
                         alt="Biography Website">
                    <div class="project-overlay">
                        <h4>Sample Biography</h4>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3>Sample Biography</h3>
                    </div>
                    <div class="project-description">
                        <p>A personal biography website showcasing life story, achievements, and experiences with clean design and smooth navigation.</p>
                    </div>
                    <div class="project-tech">
                        <span class="tech-badge">HTML</span>
                        <span class="tech-badge">CSS</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">Bootstrap</span>
                    </div>
                    <div class="project-buttons">
                        <a href="https://github.com/RondelInto/Biography" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-code force-new-tab">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                        <a href="https://rondelinto.github.io/Biography/" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-demo force-new-tab">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Project 3 - Portfolio -->
            <div class="project-card">
                <div class="project-image">
                    <img src="https://media.discordapp.net/attachments/758367359018205224/1080742787454074890/D9A43BBA-8E63-497E-BF1C-0B954E6EB380.gif?ex=698199a7&is=69804827&hm=fdcc5a17ce23f702451907c81a7960f506550547f34cc0241466f8c7b69531ba&" 
                         alt="Portfolio Website">
                    <div class="project-overlay">
                        <h4>Professional Portfolio</h4>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3>Portfolio Website</h3>
                    </div>
                    <div class="project-description">
                        <p>A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.</p>
                    </div>
                    <div class="project-tech">
                        <span class="tech-badge">HTML</span>
                        <span class="tech-badge">CSS</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">Responsive</span>
                    </div>
                    <div class="project-buttons">
                        <a href="https://github.com/RondelInto/Portfolio" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-code force-new-tab">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                        <a href="https://rondelinto.github.io/Portfolio/" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-demo force-new-tab">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Project 4 - Python Project -->
            <div class="project-card">
                <div class="project-image">
                    <img src="https://media.giphy.com/media/NEAh5nxOe7rFGB4aQ5/giphy.gif"
                         alt="Library Management">
                    <div class="project-overlay">
                        <h4>Library Management</h4>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3>Libris core</h3>
                    </div>
                    <div class="project-description">
                        <p>A sample of a Live Library management system for my python project.</p>
                    </div>
                    <div class="project-tech">
                        <span class="tech-badge">Phyton</span>
                    </div>
                    <div class="project-buttons">
                        <a href="https://github.com/RondelInto/Libris-Core-Library-Information-System-" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-code force-new-tab">
                            <i class="fab fa-github"></i>
                            Code
                        </a>
                        <a href="https://github.com/RondelInto/Libris-Core-Library-Information-System-" 
                           target="_blank" 
                           rel="noopener noreferrer nofollow"
                           class="project-btn btn-demo force-new-tab">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p class="contact-label">Email</p>
                                <p class="contact-value">r.into.554432@umindanao.edu.ph</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <p class="contact-label">Phone</p>
                                <p class="contact-value">+63 926 728 0916</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p class="contact-label">Location</p>
                                <p class="contact-value">Davao City, Philippines</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fab fa-github"></i>
                            </div>
                            <div>
                                <p class="contact-label">GitHub</p>
                                <p class="contact-value">github.com/rondelinto</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-map">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                             alt="Davao City Map" class="map-image">
                    </div>
                </div>
                
                <div class="contact-form">
                    <h3>Send a Message</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">RI</div>
                <h3 class="footer-name">Rondel Into</h3>
                <p class="footer-role">IT Student & Developer</p>
                <div class="footer-social">
                    <a href="https://github.com" class="social-icon" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" class="social-icon" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com" class="social-icon" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" class="social-icon" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="mailto:r.into.554432@umindanao.edu.ph" class="social-icon">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
                <p class="footer-text">Made with ❤️ by Rondel Into © 2024</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript Files -->
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>