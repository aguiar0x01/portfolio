/*
 * @author: aguiar0x01
 * OBS: Lottie Animation by @1hanzla100 on GitHub
 */
export function loadAnimation() {
    fetch('./data/coding_animation_lottie.json')
    .then(response => response.json())
    .then(animationData => {
        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });
    });
}
