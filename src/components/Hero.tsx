import DownloadResumeButton from './DownloadResumeButton';

export default function Hero() {
    return(
        <section className="flex flex-col items-center pt-20 pb-12 px-0 sm:pt-24 sm:pb-16 md:pt-28 md:pb-0 text-center bg-surface relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ 
                    backgroundImage: `radial-gradient(#1f1b10 2px, transparent 2px)`, 
                    backgroundSize: '32px 32px' 
                 }}>
            </div>
            
            <div className="max-w-4xl w-full px-4 sm:px-6 relative z-10 mb-12 md:mb-20">
                {/* Badge */}
                <span className="inline-block px-3 py-1 mb-4 sm:mb-6 text-xs sm:text-sm font-bold uppercase tracking-widest bg-tertiary-container text-on-tertiary border-[3px] border-on-surface shadow-neo font-label hover:animate-wiggle cursor-pointer animate-slam" style={{ animationDelay: '0ms' }}>
                    Available for Work
                </span>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-on-surface leading-none mb-6 sm:mb-8 tracking-tighter font-h1 animate-slam" style={{ animationDelay: '100ms' }}> HI,I'M <span className="text-secondary bg-secondary-fixed px-2 border-[4px] border-on-surface shadow-neo inline-block rotate-[-2deg] hover:rotate-[2deg] transition-transform cursor-pointer">AOMZ</span><br />
                    APP SUPPORT & DEV
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-on-surface/80 mb-8 sm:mb-10 max-w-2xl mx-auto font-body animate-slam" style={{ animationDelay: '200ms' }}>
                    ทดสอบ Description
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 animate-slam" style={{ animationDelay: '300ms' }}>
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-black bg-primary-container text-on-primary-container border-[4px] border-on-surface shadow-neo-lg hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-label uppercase tracking-wider">
                        VIEW PROJECTS
                    </button>
                    <DownloadResumeButton />
                </div>
            </div>

            {/* Marquee Tape */}
            <div className="w-full bg-secondary border-y-[4px] border-on-surface py-3 overflow-hidden flex transform -rotate-2 scale-105 origin-left mt-auto shadow-neo-lg">
                <div className="flex whitespace-nowrap animate-marquee font-h1 text-white text-xl sm:text-2xl font-black tracking-widest uppercase">
                    <span className="mx-4">BUILDING COOL STUFF</span> • 
                    <span className="mx-4">SOLVING PROBLEMS</span> • 
                    <span className="mx-4">WRITING CODE</span> • 
                    <span className="mx-4">APP SUPPORT</span> • 
                    <span className="mx-4">DEVELOPMENT</span> • 
                </div>
                <div className="flex whitespace-nowrap animate-marquee font-h1 text-white text-xl sm:text-2xl font-black tracking-widest uppercase" aria-hidden="true">
                    <span className="mx-4">BUILDING COOL STUFF</span> • 
                    <span className="mx-4">SOLVING PROBLEMS</span> • 
                    <span className="mx-4">WRITING CODE</span> • 
                    <span className="mx-4">APP SUPPORT</span> • 
                    <span className="mx-4">DEVELOPMENT</span> • 
                </div>
                <div className="flex whitespace-nowrap animate-marquee font-h1 text-white text-xl sm:text-2xl font-black tracking-widest uppercase" aria-hidden="true">
                    <span className="mx-4">BUILDING COOL STUFF</span> • 
                    <span className="mx-4">SOLVING PROBLEMS</span> • 
                    <span className="mx-4">WRITING CODE</span> • 
                    <span className="mx-4">APP SUPPORT</span> • 
                    <span className="mx-4">DEVELOPMENT</span> • 
                </div>
            </div>
        </section>
    )
}
