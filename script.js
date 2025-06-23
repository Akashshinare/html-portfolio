window.addEventListener("DOMContentLoaded", () => {
  const { jsPDF } = window.jspdf;

  // Handle Download CV
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn && jsPDF) {
    downloadBtn.addEventListener("click", () => {
      const doc = new jsPDF();

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(20);
      doc.text("Akash Ranu Shinare", 20, 20);

      doc.setFontSize(12);
      doc.setFont('Helvetica', 'normal');
      doc.text("Email: akashshinare199@gmail.com", 20, 30);
      doc.text("Phone: 7774948040", 20, 40);
      doc.text("Location: Navi Mumbai, Maharashtra, India", 20, 50);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(14);
      doc.text("Objective:", 20, 65);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(12);
      doc.text("Web Developer with 6 months experience in PHP, MySQL, and front-end tech.", 20, 75);

      doc.setFont('Helvetica', 'bold');
      doc.text("Skills:", 20, 90);
      doc.setFont('Helvetica', 'normal');
      const skills = [
        "Java, PHP, SQL", 
        "HTML5, CSS3, JavaScript, AJAX, JSON",
        "RESTful APIs, Git, Bitbucket, SourceTree",
        "MySQL, Eclipse, VS Code, Windows, Linux"
      ];
      let y = 100;
      skills.forEach(skill => {
        doc.text(`- ${skill}`, 25, y);
        y += 10;
      });

      doc.setFont('Helvetica', 'bold');
      doc.text("Education:", 20, y + 10);
      doc.setFont('Helvetica', 'normal');
      doc.text("BE in Computer Engineering - Genba Sopanrao Moze College (2023)", 25, y + 20);
      doc.text("Diploma - Jaihind Polytechnic Kuran (2020)", 25, y + 30);
      doc.text("SSC - Jay Malhar Highschool (2016)", 25, y + 40);

      doc.setFont('Helvetica', 'bold');
      doc.text("Projects:", 20, y + 55);
      doc.setFont('Helvetica', 'normal');
      doc.text("- Online Voting System using Blockchain", 25, y + 65);
      doc.text("- Attendance & Performance Alert System", 25, y + 75);
      doc.text("- Tour & Travel Management", 25, y + 85);

      doc.save("Akash_Shinare_Resume.pdf");
    });
  } else {
    console.error("jsPDF not found or downloadBtn missing");
  }

  // Hire Me Button Alert
  const hireMeBtn = document.getElementById("hireMeBtn");
  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", () => {
      alert(`💼 Hello, I'm Akash Shinare.

I have 6 months of practical experience in Web Development, focusing on both frontend and backend technologies.

🛠️ My technical skillset includes:
- Java (OOPs, Exception Handling, Collections, JDBC)
- PHP (CRUD, MySQL, JSON, AJAX)
- HTML5, CSS3, JavaScript

I’m passionate about writing clean code and continuously improving my skills.

If you have any suitable opportunity, I’d be grateful to be considered for roles like:
• Trainee Software Engineer
• Junior Developer
• PHP Developer

🙏 Thank you for your time and consideration!`);
    });
  }
});
