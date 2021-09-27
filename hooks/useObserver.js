import { useEffect } from 'react';

const useObserver = (activeCharacter, setActiveCharacter, refs, idName, pageHeight) => {
    const observerMargin = Math.floor(pageHeight / 2);
    useEffect(() => {
        const observerConfig = {         
            rootMargin: `-${
                pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
            }px 0px -${observerMargin}px 0px`
        };
        const handleIntersection = function(entries) {
        entries.forEach((entry) => {
            if (entry.target.id !== activeCharacter && entry.isIntersecting) {
            setActiveCharacter(entry.target.id);
            }
        });
        };
        const observer = new IntersectionObserver(
            handleIntersection,
            observerConfig
        );
        console.log(refs)
        console.log(refs[idName])
        observer.observe(refs[idName].current);
        return () => observer.disconnect();
    }, [ activeCharacter, setActiveCharacter, refs, idName, pageHeight, observerMargin ]);
}

export default useObserver;