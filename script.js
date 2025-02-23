document.addEventListener("DOMContentLoaded", function () {
    function isMobile() {
        return window.innerWidth <= 1024;
    }

    if (!isMobile()) {
        document.querySelectorAll('.scramble').forEach(element => {
            const textElement = element.querySelector('.scramble-text');
            if (!textElement) return;
            
            const originalText = textElement.textContent;
            let timeout;

            element.addEventListener('mouseenter', function () {
                clearTimeout(timeout);
                let scrambleCount = 0;
                const scrambleDuration = 200;
                const scrambleInterval = 50;

                function scramble() {
                    textElement.textContent = scrambleLetters(originalText);
                    scrambleCount++;
                    if (scrambleCount < scrambleDuration / scrambleInterval) {
                        timeout = setTimeout(scramble, scrambleInterval);
                    } else {
                        textElement.textContent = originalText;
                    }
                }

                scramble();
            });

            element.addEventListener('mouseleave', function () {
                clearTimeout(timeout);
                textElement.textContent = originalText;
            });
        });
    }

    function scrambleLetters(text) {
        return text.split('').sort(() => Math.random() - 0.5).join('');
    }
});



document.addEventListener("DOMContentLoaded", function () {
        textSplit({
            split: "lines, words, chars", // Splitting text
            element: ".c-hero__heading"   // Target elements
        });
    
        // Animate the split text using GSAP
        gsap.from(".c-hero__heading .a-word", {
            opacity: 0,
            y: 20,
            duration: 1.2,
            stagger: 0.02,
            ease: "power3.out"
        });
    });
  