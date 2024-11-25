import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RightToLeft = () => {
    const elementRef = useRef(null);

    const rightToLeft = () => {
        const element = elementRef.current;
        gsap.from(element, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            delay: 0.2
        });
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    // Slide In animation
                    gsap.to(element, {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                        delay: 0.2
                    });
                }
                // else {
                //     // Reverse animation when moving out of view
                //     gsap.from(element, {
                //         x: 0,
                //         opacity: 0,
                //         duration: 1,
                //         ease: 'power2.inOut',
                //         delay: 0.2
                //     });
                //     // Slide In animation
                //     gsap.to(element, {
                //         x: 100,
                //         opacity: 1,
                //         duration: 1,
                //         ease: 'power2.inOut',
                //         delay: 0.2
                //     });
                // }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger animation when 50% of the element is in view
        });

        // Start observing the target element
        observer.observe(element);

        // Cleanup: Disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }

    useEffect(() => {
        rightToLeft()
    }, []);

    return (
        <div style={{ margin: '50px 0px' }} ref={elementRef}>
            <button class="feature svelte-d0hiow">
                <p class="number svelte-d0hiow">1</p>
                <p class="text svelte-d0hiow">Collect and gather all of your data in one place.</p>
            </button>
        </div>
    );
};

export default RightToLeft;
