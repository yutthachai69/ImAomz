// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-surface-container-highest border-t-[4px] border-on-surface py-16 px-4 sm:py-20 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* Contact Side */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight inline-block border-b-[6px] border-secondary pr-8 font-h1">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl font-medium max-w-sm font-body">
            กำลังมองหา Application Support หรือ Full-stack Developer เพิ่มในทีมไหม? ทักมาคุยกันได้เลยครับ!
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:Firstaza4455@gmail.com" className="text-xl sm:text-2xl font-black underline hover:text-secondary transition-colors font-label">
              Firstaza4455@gmail.com
            </a>
            <div className="flex gap-4 sm:gap-6">
              <a href="https://github.com/yutthachai69" className="font-bold border-b-2 border-on-surface hover:text-secondary transition-colors font-label uppercase tracking-wider">GITHUB</a>
              <a href="https://www.linkedin.com/in/yutthachai-khammeephak-204212409/" className="font-bold border-b-2 border-on-surface hover:text-secondary transition-colors font-label uppercase tracking-wider">LINKEDIN</a>
            </div>
          </div>
        </div>

        {/* Experience/CTA Side */}
        <div className="bg-primary-container border-[4px] border-on-surface shadow-neo p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-on-surface text-primary-container border-[3px] border-on-surface flex items-center justify-center font-black text-xl sm:text-2xl">
            ★
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase font-h1">Ready for the next challenge?</h3>
          <a href="https://drive.google.com/drive/folders/1sH7r0mX1Xy1H0Z6x8W1G1Xy1H0Z6x8W1?usp=sharing" className="w-full py-3 sm:py-4 bg-white border-[3px] border-on-surface font-black shadow-neo active-press uppercase tracking-wider font-label">
            Download Resume (PDF)
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t-[2px] border-on-surface/20 flex flex-col sm:flex-row justify-between items-center gap-4 font-bold text-sm opacity-50 font-label">
        <p>DEV.SUPPORT © 2026</p>
        <p>BUILT WITH NEXT.JS</p>
      </div>
    </footer>
  );
}